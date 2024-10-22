import React, { useState } from "react";
import { MdAccessTime, MdDateRange, MdLocationOn, MdPerson, MdPhone, MdWork } from "react-icons/md";
import api from "../../api/api"; // Importe o seu cliente de API
import logoImage from "../images/logo (1).png"; // Ajuste o caminho conforme sua estrutura
import styles from "./AgendarConsulta.module.css";
import FormInput from "./FormInput";

const camposFormulario = [
  {
    label: "Nome",
    icon: <MdPerson />,
    width: 412,
    id: "nome",
  },
  {
    label: "CPF",
    icon: <MdPerson />, // ou substitua por um ícone mais apropriado, se necessário
    id: "cpf",
  },
  {
    label: "Telefone",
    icon: <MdPhone />,
    id: "telefone",
  },
  {
    label: "Endereço",
    icon: <MdLocationOn />,
    id: "endereco",
  },
  {
    label: "Data de Nascimento",
    icon: <MdDateRange />,
    id: "dataNascimento",
    type: "date",
  },
  {
    label: "Setor",
    icon: <MdWork />,
    id: "setor",
  },
  {
    label: "Data da Consulta",
    icon: <MdDateRange />,
    id: "dataConsulta",
    type: "date",
  },
  {
    label: "Horário da Consulta",
    icon: <MdAccessTime />,
    id: "horarioConsulta",
    type: "time",
  },
];

function AgendarConsulta() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    endereco: "",
    dataNascimento: "",
    setor: "",
    dataConsulta: "",
    horarioConsulta: "",
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

    const payload = {
      username: formData.nome,
      cpf: formData.cpf,
      telefone: formData.telefone,
      endereco: formData.endereco,
      data: formData.dataNascimento, // Formato: 'yyyy-MM-dd'
      setor: formData.setor,
      dataconsu: formData.dataConsulta, // Formato: 'yyyy-MM-dd'
      hora: formData.horarioConsulta, // Formato: 'HH:mm'
    };

    try {
      const response = await api.post("/agendar", payload); // Endpoint ajustado
      console.log("Dados enviados com sucesso:", response.data);
      setSuccess(true);
      setFormData({
        nome: "",
        cpf: "",
        telefone: "",
        endereco: "",
        dataNascimento: "",
        setor: "",
        dataConsulta: "",
        horarioConsulta: "",
      });
    } catch (err) {
      console.error("Erro ao enviar dados:", err);
      setError(err.response?.data?.message || "Ocorreu um erro ao enviar os dados. Por favor, tente novamente.");
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
            <h1 className={styles.formTitle}>Agendar</h1>
            {camposFormulario.map((input, index) => (
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
};

export default AgendarConsulta;
