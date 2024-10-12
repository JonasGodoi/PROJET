// src/components/FormInput.js
import React from "react";
import styles from "./EncaminharPessoa.module.css"; // Crie este arquivo CSS conforme necessário

function FormInput({ label, icon, width, type = "text", id, value, onChange }) {
  return (
    <div className={styles.formGroup} style={{ width }}>
      <label htmlFor={id} className={styles.label}>
        {icon} {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className={styles.input}
        required
      />
    </div>
  );
}

export default FormInput;
