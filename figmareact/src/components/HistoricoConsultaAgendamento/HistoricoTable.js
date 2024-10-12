import React from "react";
import { Button } from "react-bootstrap";
import styles from "./ConsultarHistoricoAgen.module.css";

export function HistoricoTable({ items, onEdit, onDelete }) {
  return (
    <table className={styles.historicoTable}>
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Nome</th>
          <th>Data do Agendamento</th>
          <th>Horário do Agendamento</th>
          <th>Setor</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.categoria}</td>
            <td>{item.nome || item.username}</td>
            <td>{item.dataConsulta || "-"}</td>
            <td>{item.horarioConsulta || "-"}</td>
            <td>{item.setor || "-"}</td>
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
