import React from "react";
import { Button } from "react-bootstrap";
import styles from "./GerenciarBeneficiado.module.css";

function HistoricoTable({ data, onEdit, onDelete }) {
  return (
    <table className={styles.historicoTable}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Codnis</th>
          <th>Endereço</th>
          <th>CPF</th>
          <th>Telefone</th>
          <th>Date</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.nome}</td>
            <td>{item.codnis}</td>
            <td>{item.endereco}</td>
            <td>{item.cpf}</td>
            <td>{item.telefone}</td>
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

export default HistoricoTable;
