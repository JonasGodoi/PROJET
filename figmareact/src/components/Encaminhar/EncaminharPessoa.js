import React, { useState } from "react";
import { MdDateRange, MdLocationOn, MdPerson, MdPhone, MdWork, MdArrowBack } from "react-icons/md";
import api from "../../api/api";
import logoImage from "../images/logo (1).png";
import styles from "./EncaminharPessoa.module.css";
import FormInput from "./FormInput";

const formInputs = [
  { label: "Nome", icon: <MdPerson />, width: 412, id: "username" },
  { label: "CPF", icon: <MdPerson />, width: 217, id: "cpf" },
  { label: "Telefone", icon: <MdPhone />, width: 217, id: "telefone" },
  { label: "Endereço", icon: <MdLocationOn />, width: 412, id: "endereco" },
  { label: "Data de Nascimento", icon: <MdDateRange />, width: 217, id: "data", type: "date" },
  { label: "Setor", icon: <MdWork />, width: 217, id: "setor" },
];

function EncaminharPessoa() {
  const [formData, setFormData] = useState({
    username: "",
    cpf: "",
    telefone: "",
    endereco: "",
    data: "",
    setor: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const payload = { ...formData };

    try {
      const response = await api.post("/encaminhar", payload);
      console.log("Dados enviados com sucesso:", response.data);
      setSuccess(true);
      setFormData({ username: "", cpf: "", telefone: "", endereco: "", data: "", setor: "" });
    } catch (err) {
      console.error("Erro ao enviar dados:", err);
      setError("Ocorreu um erro ao enviar os dados. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const toggleHelp = () => setShowHelp((prev) => !prev);

  return (
    <div className={styles.container}>
      <main className={styles.background}>
        <button className={styles.helpButton} onClick={toggleHelp}>?</button>

        {showHelp && (
          <div className={styles.modalOverlay} onClick={toggleHelp}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <h2>Instruções</h2>
              <p>Nesta página, você pode encaminhar um usuário para o setor necessário preenchendo os campos obrigatórios abaixo. Siga as instruções para garantir o correto preenchimento dos dados.</p>
              <ol>
                <li>Preencha o <strong>Nome</strong> do usuário corretamente.</li>
                <li>Informe o <strong>CPF</strong> sem pontos ou traços.</li>
                <li>Adicione um <strong>Telefone</strong> válido para contato.</li>
                <li>Especifique o <strong>Endereço</strong> completo do usuário.</li>
                <li>Selecione a <strong>Data de Nascimento</strong> no formato apropriado.</li>
                <li>Escolha o <strong>Setor</strong> ao qual o usuário deve ser encaminhado.</li>
                <li>Verifique todas as informações antes de enviar para evitar erros.</li>
              </ol>
              <button className={styles.closeButton} onClick={toggleHelp}>Fechar</button>
            </div>
          </div>
        )}

        <button
          type="button"
          className={styles.backButton}
          onClick={() => window.history.back()}
        >
          <MdArrowBack />
        </button>

        <form className={styles.formWrapper} onSubmit={handleSubmit}>
          <aside className={styles.sidebar}>
            <img src={logoImage} alt="Logo da Secretaria" className={styles.logo} />
            <h2 className={styles.sidebarTitle}>Secretaria de Assistência Social de Quatiguá</h2>
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
