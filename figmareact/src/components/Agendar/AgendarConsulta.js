import React from "react";
import { MdAccessTime, MdDateRange, MdLocationOn, MdPerson, MdPhone, MdWork } from "react-icons/md";
import logoImage from "../images/logo (1).png"; // Ajuste o caminho conforme sua estrutura
import styles from "./AgendarConsulta.module.css";
import InputField from "./FormInput";

const AgendarConsulta = () => {
  const formFields = [
    {
      label: "Nome",
      icon: <MdPerson />,
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
      label: "Horário Consulta",
      icon: <MdAccessTime />,
      id: "horarioConsulta",
      type: "time",
    },
  ];

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
            <h1 className={styles.formTitle}>Agendar</h1>
            {formFields.map((field) => (
              <InputField
                key={field.id}
                label={field.label}
                icon={field.icon}
                type={field.type}
                id={field.id}
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
};

export default AgendarConsulta;
