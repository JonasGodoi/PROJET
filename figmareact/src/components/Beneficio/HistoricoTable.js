import React from "react";
import { Button, Table } from "react-bootstrap";
import styles from "./BeneficiosAssistente.module.css";

const HistoricoTable = ({ currentItems, handleShowEditModal, handleShowDeleteModal }) => {
  return (
    <Table striped bordered hover className={styles.table}>
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Descrição Benefício</th>
        </tr>
      </thead>
      <tbody>
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.Categoria}</td>
              <td>{item.DescriçãoBeneficio}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => handleShowEditModal(item)}
                  className={styles.editButton}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleShowDeleteModal(item)}
                  className={styles.deleteButton}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="2">Nenhum benefício encontrado</td> {/* Mensagem quando não há dados */}
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default HistoricoTable;
