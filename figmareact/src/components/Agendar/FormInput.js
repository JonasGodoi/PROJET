import React from 'react';
import styles from './AgendarConsulta.module.css';

const FormInput = ({ label, icon, type = 'text', id, value, onChange }) => {
  return (
    <>
      <label htmlFor={id} className={styles.inputLabel}>{label}</label>
      <div className={styles.inputWrapper}>
        <span className={styles.inputIcon}>{icon}</span> {/* Renderiza o ícone como componente */}
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className={styles.inputField}
          required
        />
      </div>
    </>
  );
};

export default FormInput;
