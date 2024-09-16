import React from 'react';
import styles from './EncaminharPessoa.module.css';

const FormInput = ({ label, icon, type = 'text', id, value, onChange }) => {
  return (
    <>
      <label htmlFor={id} className={styles.inputLabel}>{label}</label>
      <div className={styles.inputWrapper}>
        {icon && <span className={styles.inputIcon}>{icon}</span>} {/* Renderize o ícone diretamente */}
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className={styles.inputField}
        />
      </div>
    </>
  );
};

export default FormInput;
