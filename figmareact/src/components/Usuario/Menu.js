// HistoricoList.js
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import api from "../../api/api";
import styles from "./GerenciarUsuario.module.css";
import HistoricoTable from "./HistoricoTable";
import { AddModal, DeleteModal, EditModal } from "./Modals";
import { Pagination } from "./Pagination";

function HistoricoList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [historicoData, setHistoricoData] = useState([]);
  const itemsPerPage = 5;

  // Função para buscar dados do backend
  const fetchHistoricoData = async () => {
    try {
      const response = await api.get("/user");
      setHistoricoData(response.data); // Armazena os dados recebidos
    } catch (error) {
      console.error("Erro ao buscar dados do histórico", error);
    }
  };

  useEffect(() => {
    fetchHistoricoData();
  }, []); // Executa apenas na primeira renderização

  // Função para adicionar um novo item
  const createUser = async (user) => {
    try {
      const response = await api.post('/user', user);
      console.log("Usuário criado:", response.data); // Log para verificação
      // Atualiza a lista após adicionar
      fetchHistoricoData();
      setShowAddModal(false);
    } catch (error) {
      console.error("Erro ao criar usuário", error);
      alert("Erro ao criar usuário. Tente novamente.");
    }
  };

  // Função para atualizar um item
  const updateUser = async (updatedUser) => {
    try {
      await api.put(`/user/${selectedItem.id}`, updatedUser);
      console.log("Usuário atualizado:", updatedUser); // Log para verificação
      // Atualiza a lista após editar
      fetchHistoricoData();
      setShowEditModal(false);
    } catch (error) {
      console.error("Erro ao atualizar usuário", error);
      alert("Erro ao atualizar usuário. Tente novamente.");
    }
  };

  // Função para excluir um item
  const deleteUser = async () => {
    try {
      await api.delete(`/user/${selectedItem.id}`);
      console.log("Usuário excluído:", selectedItem); // Log para verificação
      // Atualiza a lista após excluir
      fetchHistoricoData();
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Erro ao excluir usuário", error);
      alert("Erro ao excluir usuário. Tente novamente.");
    }
  };

  // Filtra os dados com base na pesquisa
  const filteredData = historicoData.filter((item) => {
    const searchValue = searchTerm.toLowerCase();
    return (
      item.id.toString().includes(searchValue) ||
      item.username.toLowerCase().includes(searchValue) ||
      item.password.toLowerCase().includes(searchValue) ||
      item.profile.toString().includes(searchValue)
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
          onSelectPage={setCurrentPage}
        />
      </div>

      <AddModal
        show={showAddModal}
        handleClose={() => setShowAddModal(false)}
        handleSave={createUser}
      />

      <EditModal
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
        selectedItem={selectedItem}
        handleSave={updateUser}
      />

      <DeleteModal
        show={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleDelete={deleteUser}
        selectedItem={selectedItem}
      />
    </div>
  );
}

export default HistoricoList;