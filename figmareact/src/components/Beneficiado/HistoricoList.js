import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import api from '../../api/api'; // Ajustado para a estrutura de diretórios
import AddEditModal from './AddEditModal';
import { deleteHistorico, getHistorico } from './ApiService';
import DeleteModal from './DeleteModal';
import styles from './GerenciarBeneficiado.module.css';
import HistoricoTable from './HistoricoTable';
import Pagination from './Pagination';


function HistoricoList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [historicoData, setHistoricoData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHistorico();
        setHistoricoData(data);
      } catch (error) {
        console.error('Erro ao buscar dados do histórico:', error);
      }
    };
    fetchData();
  }, []);

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

  const handleSave = async (item) => {
    try {
      if (item.id) {
        // Atualizar um benefício existente
        await api.put(`/Beneficiario/${item.id}`, item);
      } else {
        // Criar um novo benefício
        await api.post('/Beneficiario', item);
      }
      
      // Atualizar os dados e fechar os modais
      const data = await getHistorico();
      setHistoricoData(data);
      handleCloseAddModal();
      handleCloseEditModal();
    } catch (error) {
      console.error('Erro ao salvar histórico:', error);
      alert('Houve um erro ao salvar os dados. Por favor, tente novamente.');
    }
  };
  
  const handleDelete = async () => {
    try {
      if (selectedItem) {
        await deleteHistorico(selectedItem.id);
        const data = await getHistorico();
        setHistoricoData(data);
        handleCloseDeleteModal();
      }
    } catch (error) {
      console.error('Erro ao excluir histórico:', error);
      alert('Houve um erro ao excluir os dados. Por favor, tente novamente.');
    }
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
        data={currentItems}
        onEdit={handleShowEditModal}
        onDelete={handleShowDeleteModal}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onSelectPage={setCurrentPage}
      />

      <AddEditModal
        show={showAddModal || showEditModal}
        handleClose={showAddModal ? handleCloseAddModal : handleCloseEditModal}
        title={showAddModal ? 'Adicionar Usuário' : 'Editar Usuário'}
        item={selectedItem}
        onSave={handleSave}
      />

      <DeleteModal
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default HistoricoList;
