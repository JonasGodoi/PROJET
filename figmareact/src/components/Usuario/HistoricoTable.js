import React from "react";
import { Button } from "react-bootstrap";
import styles from "./GerenciarUsuario.module.css";

function Table({ items, onEdit, onDelete }) {
  return (
    <table className={styles.historicoTable}>
      <thead>
        <tr>
          {/* <th>Nome</th> */}
          <th>Código</th>
          <th>Login</th>
          <th>Senha</th>
          <th>Profile</th>
          {/* <th>Date</th>
          <th>Ações</th> */}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            {/* <td>{item.nome}</td> */}
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.password}</td>
            <td>{item.profile}</td>
            {/* <td>{item.date}</td> */}
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

export default Table;
