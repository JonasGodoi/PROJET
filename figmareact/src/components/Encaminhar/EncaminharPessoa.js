import React from "react";
import { MdDateRange, MdLocationOn, MdPerson, MdPhone, MdWork } from "react-icons/md";
import logoImage from "../images/logo (1).png"; // Ajuste o caminho conforme sua estrutura
import styles from "./EncaminharPessoa.module.css"; // Atualize para o CSS do AgendarConsulta
import FormInput from "./FormInput";

const formInputs = [
  {
    label: "Nome",
    icon: <MdPerson />,
    width: 412,
    id: "nome",
  },
  {
    label: "CPF",
    icon: <MdPerson />, // Use um ícone mais apropriado, se disponível
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
  { label: "Data de Nascimento", icon: <MdDateRange />, width: 217, id: "dataNascimento", type: "date" },
  {
    label: "Setor",
    icon: <MdWork />,
    width: 217,
    id: "setor",
  },
];

function EncaminharPessoa() {
  return (
    <div className={styles.container}>
      <main className={styles.background}>
        <form className={styles.formWrapper}>
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
              />
            ))}
            <button type="submit" className={styles.submitButton}>
              Enviar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default EncaminharPessoa;
