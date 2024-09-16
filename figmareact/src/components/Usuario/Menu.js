import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./GerenciarUsuario.module.css";
import HistoricoTable from "./HistoricoTable";
import { AddModal, DeleteModal, EditModal } from "./Modals";
import Pagination from "./Pagination";

function HistoricoList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/beneficiarios'); // Ajuste o endpoint conforme sua API
        setUsers(response.data);
      } catch (err) {
        console.error(err);
        setError('Erro ao carregar usuários');
      }
    };

    fetchUsers();
  }, []);
  const filteredData = historicoData.filter((item) => {
    const searchValue = searchTerm.toLowerCase();
    return (
      item.nome.toLowerCase().includes(searchValue) ||
      item.cod.toLowerCase().includes(searchValue) ||
      item.login.toLowerCase().includes(searchValue) ||
      item.senha.toLowerCase().includes(searchValue) ||
      item.requisicao.toLowerCase().includes(searchValue) ||
      item.date.toLowerCase().includes(searchValue)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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
          totalItems={filteredData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <AddModal show={showAddModal} onClose={() => setShowAddModal(false)} />
      <EditModal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        item={selectedItem}
      />
      <DeleteModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        item={selectedItem}
      />
    </div>
  );
}

export default HistoricoList;
