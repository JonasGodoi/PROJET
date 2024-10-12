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
          <th>Horario do Agendamento</th>
          <th>Setor </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.nome}</td>
            <td>{item.codnis}</td>
            <td>{item.endereco}</td>
            <td>{item.cpf}</td>
            <td>{item.telefone}</td>

            <td>
              <Button className={`${styles.actionButton} ${styles.editButton}`} onClick={() => onEdit(item)}>
                Editar
              </Button>
              <Button className={`${styles.actionButton} ${styles.deleteButton}`} onClick={() => onDelete(item)}>
                Excluir
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
