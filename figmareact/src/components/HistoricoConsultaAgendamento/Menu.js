import React, { useState } from "react";
import { Button } from "react-bootstrap";
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
  const itemsPerPage = 7;

  const historicoData = [
    {
      nome: "Luna Starling",
      codnis: "A1B2C3",
      endereco: "Rua das Estrelas, 999",
      cpf: "321.654.987-00",
      telefone: "(11) 98765-1234",
      date: "01/01/1990",
    },
  ];

  const filteredData = historicoData.filter((item) => {
    const searchValue = searchTerm.toLowerCase();
    return (
      item.nome.toLowerCase().includes(searchValue) ||
      item.codnis.toLowerCase().includes(searchValue) ||
      item.endereco.toLowerCase().includes(searchValue) ||
      item.cpf.toLowerCase().includes(searchValue) ||
      item.telefone.toLowerCase().includes(searchValue) ||
      item.date.toLowerCase().includes(searchValue)
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
        onPageSelect={(page) => setCurrentPage(page)}
      />

      <AddModal show={showAddModal} handleClose={() => setShowAddModal(false)} />
      <EditModal show={showEditModal} handleClose={() => setShowEditModal(false)} selectedItem={selectedItem} />
      <DeleteModal show={showDeleteModal} handleClose={() => setShowDeleteModal(false)} selectedItem={selectedItem} />
    </div>
  );
}

export default HistoricoList;
