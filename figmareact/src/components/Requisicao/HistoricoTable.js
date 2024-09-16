import React from "react";
import { Button } from "react-bootstrap";
import styles from "./RequisicaoSecretaria.module.css";

export function HistoricoTable({ items, onEdit, onDelete }) {
  return (
    <table className={styles.historicoTable}>
      <thead>
        <tr>
          <th>CodReq</th>
          <th>Data</th>
          <th>Descricao</th>
          <th>Status</th>
          <th>CodNis</th>
          <th>CodB</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.CodReq}</td>
            <td>{item.Descrição}</td>
            <td>{item.Status}</td>
            <td>{item.CodNIS}</td>
            <td>{item.CodBeneficio}</td>
            <td>{item.date}</td>
            <td>
              <Button
                className={`${styles.actionButton} ${styles.editButton}`}
                onClick={() => onEdit(item)}
              >
                Editar
              </Button>
              <Button
                className={`${styles.actionButton} ${styles.deleteButton}`}
                onClick={() => onDelete(item)}
              >
                Excluir
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
