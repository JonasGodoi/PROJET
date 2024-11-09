import React, { useState } from "react";
import { MdAccessTime, MdDateRange, MdLocationOn, MdPerson, MdPhone, MdWork, MdArrowBack } from "react-icons/md"; // Importação da seta
import api from "../../api/api"; 
import logoImage from "../images/logo (1).png"; 
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
    icon: <MdPerson />,
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
  const [showHelp, setShowHelp] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const payload = {
      username: formData.nome,
      cpf: formData.cpf,
      telefone: formData.telefone,
      endereco: formData.endereco,
      data: formData.dataNascimento,
      setor: formData.setor,
      dataconsu: formData.dataConsulta,
      hora: formData.horarioConsulta,
    };

    try {
      const response = await api.post("/agendar", payload);
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
            <button
              type="button"
              className={styles.helpButton}
              onClick={() => setShowHelp(true)}
            >
              ?
            </button>
            <button
              type="button"
              className={styles.backButton}
              onClick={() => window.history.back()}
            >
              <MdArrowBack /> {/* Exibindo a seta de voltar */}
            </button>
          </div>
        </form>

        {showHelp && (
          <div className={styles.modalOverlay} onClick={() => setShowHelp(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <h2>Instruções para Agendar Consulta</h2>
              <p>Nesta página, você pode agendar uma nova consulta preenchendo os campos obrigatórios abaixo. Certifique-se de seguir as instruções de preenchimento para garantir que os dados estejam corretos.</p>
              <ol>
                <li><b>Nome:</b> Informe o nome completo do usuário. Mínimo de caracteres: 2, Máximo de caracteres: 50.</li>
                <li><b>CPF:</b> Digite o número do CPF com 11 dígitos.</li>
                <li><b>Telefone:</b> Informe o telefone de contato do usuário.</li>
                <li><b>Endereço:</b> Insira o endereço completo.</li>
                <li><b>Data de Nascimento:</b> Insira a data de nascimento no formato DD/MM/AAAA.</li>
                <li><b>Setor:</b> Escolha ou insira o setor responsável pela consulta.</li>
                <li><b>Data da Consulta:</b> Informe a data desejada no formato DD/MM/AAAA.</li>
                <li><b>Horário da Consulta:</b> Insira o horário desejado no formato HH:MM.</li>
                <li><b>Importante:</b> Verifique todos os campos antes de confirmar o agendamento.</li>
              </ol>
              <button className={styles.closeButton} onClick={() => setShowHelp(false)}>Fechar</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default AgendarConsulta;
