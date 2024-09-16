import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./BeneficiosAssistente.module.css";
import HistoricoTable from "./HistoricoTable";
import Modals from "./Modals";
import Pagination from "./Pagination";

const HistoricoList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Número de itens por página

  const historicoData = [
    {
      CodBeneficio: "A1B2C3",
      Categoria: "Saúde",
      DescriçãoBeneficio: "Auxílio médico",
    },
    // Adicione mais itens aqui
  ];

  const handleSearch = (event) => setSearchTerm(event.target.value);

  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  const handleShowEditModal = (item) => {
    setSelectedItem(item);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => setShowEditModal(false);

  const handleShowDeleteModal = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  const filteredData = historicoData.filter((item) => {
    const searchValue = searchTerm.toLowerCase();
    return (
      item.CodBeneficio.toLowerCase().includes(searchValue) ||
      item.Categoria.toLowerCase().includes(searchValue) ||
      item.DescriçãoBeneficio.toLowerCase().includes(searchValue)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageSelect = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.historicoContainer}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
        />
        <Button onClick={handleShowAddModal} className={styles.createButton}>
          Criar
        </Button>
      </div>

      <HistoricoTable
        currentItems={currentItems}
        handleShowEditModal={handleShowEditModal}
        handleShowDeleteModal={handleShowDeleteModal}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageSelect={handlePageSelect}
      />

      <Modals
        showAddModal={showAddModal}
        handleCloseAddModal={handleCloseAddModal}
        showEditModal={showEditModal}
        handleCloseEditModal={handleCloseEditModal}
        showDeleteModal={showDeleteModal}
        handleCloseDeleteModal={handleCloseDeleteModal}
        selectedItem={selectedItem}
      />
    </div>
  );
};

export default HistoricoList;
