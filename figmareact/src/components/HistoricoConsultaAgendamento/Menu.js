import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import api from "../../api/api";
import styles from "./ConsultarHistoricoAgen.module.css";
import { HistoricoTable } from "./HistoricoTable";
import { AddModal, DeleteModal, EditModal } from "./Modals";
import { Pagination } from "./Pagination";

function HistoricoList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [historicoData, setHistoricoData] = useState([]); // Estado para armazenar os dados combinados
  const itemsPerPage = 6; 

  // Função para buscar dados do backend
  useEffect(() => {
    const fetchHistoricoData = async () => {
      try {
        // Buscar dados de Agendamentos
        const agendarResponse = await api.get("/agendar");
        const agendamentos = agendarResponse.data.map(item => ({
          ...item,
          categoria: "Agendamento"
        }));

        // Buscar dados de Encaminhamentos
        const encaminharResponse = await api.get("/encaminhar");
        const encaminhamentos = encaminharResponse.data.map(item => ({
          ...item,
          categoria: "Encaminhamento"
        }));

        // Combinar os dados
        const combinedData = [...agendamentos, ...encaminhamentos];

        // Opcional: ordenar por data, horário ou outro critério
        combinedData.sort((a, b) => new Date(b.dataConsulta || b.data) - new Date(a.dataConsulta || b.data));

        setHistoricoData(combinedData); // Armazena os dados combinados
      } catch (error) {
        console.error("Erro ao buscar dados do histórico", error);
      }
    };

    fetchHistoricoData();
  }, []); // Executa apenas na primeira renderização

  // Funções para criar, atualizar e excluir (ajustar conforme necessário)
  // ... (Mantém as funções createRequisicao, updateRequisicao, deleteRequisicao se aplicável)

  // Filtra os dados com base na pesquisa
  const filteredData = historicoData.filter((item) => {
    const searchValue = searchTerm.toLowerCase();
    return (
      (item.nome && item.nome.toLowerCase().includes(searchValue)) ||
      (item.cpf && item.cpf.toLowerCase().includes(searchValue)) ||
      (item.setor && item.setor.toLowerCase().includes(searchValue)) ||
      (item.dataConsulta && item.dataConsulta.toLowerCase().includes(searchValue)) ||
      (item.horarioConsulta && item.horarioConsulta.toLowerCase().includes(searchValue)) ||
      (item.data && item.data.toLowerCase().includes(searchValue)) // Para Encaminhamento
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className={styles.historicoContainer}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <Button onClick={() => setShowAddModal(true)} className={styles.createButton}>
          Criar
        </Button>
      </div>

      <div className={styles.historicoTableContainer}>
        <HistoricoTable
          items={currentItems}
          onEdit={(item) => {
            setSelectedItem(item);
            setShowEditModal(true);
          }}
          onDelete={(item) => {
            setSelectedItem(item);
            setShowDeleteModal(true);
          }}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageSelect={(pageNumber) => setCurrentPage(pageNumber)}
        />
      </div>

      <AddModal
        show={showAddModal}
        handleClose={() => setShowAddModal(false)}
        // Adicione props adicionais se necessário
      />
      <EditModal
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
        selectedItem={selectedItem}
        // Adapte handleSave conforme a categoria
        handleSave={(item) => {
          if (selectedItem.categoria === "Agendamento") {
            // Função para atualizar agendamento
          } else {
            // Função para atualizar encaminhamento
          }
        }}
      />
      <DeleteModal
        show={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleDelete={() => {
          if (selectedItem.categoria === "Agendamento") {
            // Função para deletar agendamento
          } else {
            // Função para deletar encaminhamento
          }
          setShowDeleteModal(false);
        }}
      />
    </div>
  );
}

export default HistoricoList;
