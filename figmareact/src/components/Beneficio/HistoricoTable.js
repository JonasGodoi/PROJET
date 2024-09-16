import React from "react";
import { Button } from "react-bootstrap";
import styles from "./BeneficiosAssistente.module.css";

const HistoricoTable = ({
  currentItems,
  handleShowEditModal,
  handleShowDeleteModal
}) => {
  return (
    <div className={styles.historicoTableContainer}>
      <table className={styles.historicoTable}>
        <thead>
          <tr>
            <th>CodBeneficio</th>
            <th>Categoria</th>
            <th>Descrição Beneficio</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.CodBeneficio}</td>
              <td>{item.Categoria}</td>
              <td>{item.DescriçãoBeneficio}</td>
              <td>
                <Button
                  className={`${styles.actionButton} ${styles.editButton}`}
                  onClick={() => handleShowEditModal(item)}
                >
                  Editar
                </Button>
                <Button
                  className={`${styles.actionButton} ${styles.deleteButton}`}
                  onClick={() => handleShowDeleteModal(item)}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricoTable;
