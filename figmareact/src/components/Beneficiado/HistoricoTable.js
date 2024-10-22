import React from "react";
import { Button } from "react-bootstrap";
import styles from "./GerenciarBeneficiado.module.css";

function HistoricoTable({ data, onEdit, onDelete }) {
  return (
    <table className={styles.historicoTable}>
      <thead>
        <tr>
          <th>Beneficiario</th>          
          <th>Nis</th>
          <th>CPF</th>
          <th>Endereço</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.username}</td>
            <td>{item.nis}</td>
            <td>{item.cpf}</td>
            <td>{item.endereco}</td>
            <td>{item.telefone}</td>
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

export default HistoricoTable;
