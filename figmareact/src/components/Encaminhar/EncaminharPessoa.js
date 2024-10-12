// src/components/EncaminharPessoa.js
import React, { useState } from "react";
import { MdDateRange, MdLocationOn, MdPerson, MdPhone, MdWork } from "react-icons/md";
import api from "../../api/api"; // Importe o seu cliente de API
import logoImage from "../images/logo (1).png"; // Ajuste o caminho conforme sua estrutura
import styles from "./EncaminharPessoa.module.css"; // Atualize para o CSS do EncaminharPessoa
import FormInput from "./FormInput";

const formInputs = [
  {
    label: "Nome",
    icon: <MdPerson />,
    width: 412,
    id: "username",
  },
  {
    label: "CPF",
    icon: <MdPerson />, // Considere usar um ícone mais apropriado
    width: 217,
    id: "cpf",
  },
  {
    label: "Telefone",
    icon: <MdPhone />,
    width: 217,
    id: "telefone",
  },
  { label: "Endereço", icon: <MdLocationOn />, width: 412, id: "endereco" },
  { 
    label: "Data de Nascimento", 
    icon: <MdDateRange />, 
    width: 217, 
    id: "data",
    type: "date" 
  },
  {
    label: "Setor",
    icon: <MdWork />,
    width: 217,
    id: "setor",
  },
];

function EncaminharPessoa() {
  const [formData, setFormData] = useState({
    username: "",
    cpf: "",
    telefone: "",
    endereco: "",
    data: "", // Data no formato YYYY-MM-DD
    setor: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Preparar os dados para enviar ao backend
    const payload = {
      username: formData.username,
      cpf: formData.cpf,
      telefone: formData.telefone,
      endereco: formData.endereco,
      data: formData.data, // Enviar como String no formato YYYY-MM-DD
      setor: formData.setor,
    };

    try {
      const response = await api.post("/encaminhar", payload); // Endpoint ajustado
      console.log("Dados enviados com sucesso:", response.data);
      setSuccess(true);
      setFormData({
        username: "",
        cpf: "",
        telefone: "",
        endereco: "",
        data: "",
        setor: "",
      });
    } catch (err) {
      console.error("Erro ao enviar dados:", err);
      setError("Ocorreu um erro ao enviar os dados. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.background}>
        <form className={styles.formWrapper} onSubmit={handleSubmit}>
          <aside className={styles.sidebar}>
            <img
              loading="lazy"
              src={logoImage}
              alt="Logo da Secretaria"
              className={styles.logo}
            />
            <h2 className={styles.sidebarTitle}>
              Secretaria de Assistência Social de Quatiguá
            </h2>
          </aside>
          <div className={styles.formContent}>
            <h1 className={styles.formTitle}>Encaminhar</h1>
            {formInputs.map((input, index) => (
              <FormInput
                key={index}
                label={input.label}
                icon={input.icon}
                width={input.width}
                type={input.type}
                id={input.id}
                value={formData[input.id]}
                onChange={handleChange}
              />
            ))}
            {error && <div className={styles.errorMessage}>{error}</div>}
            {success && <div className={styles.successMessage}>Dados enviados com sucesso!</div>}
            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default EncaminharPessoa;
