import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md"; // Ícone de seta para voltar
import styles from "./BeneficiosAssistente.module.css";
import Menu from "./Menu";
import Sidebar from "./Sidebar";

function BeneficiosAssistente() {
  const [showHelp, setShowHelp] = useState(false);

  const handleBackClick = () => {
    window.history.back();
  };

  const handleHelpClick = () => {
    setShowHelp(true);
  };

  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <div className={styles.content}>
          <div className={styles.sidebarColumn}>
            <Sidebar />
          </div>
          <div className={styles.historicoColumn}>
            <Menu />
          </div>
        </div>
      </section>

      {/* Botões de ajuda e voltar */}
      <button
        type="button"
        className={styles.helpButton}
        onClick={handleHelpClick}
      >
        ? {/* Ícone de interrogação */}
      </button>

      <button
        type="button"
        className={styles.backButton}
        onClick={handleBackClick}
      >
        <MdArrowBack /> {/* Ícone de seta para voltar */}
      </button>

      {/* Modal de ajuda */}
      {showHelp && (
        <div className={styles.modalOverlay} onClick={() => setShowHelp(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>Instruções para Benefícios do Assistente</h2>
            <p>Nesta página, você pode gerenciar os benefícios associados aos usuários. As instruções para utilizar cada funcionalidade estão descritas abaixo:</p>
            <ol>
              <li><b>Menu de Benefícios:</b> Utilize o menu para acessar diferentes opções de gerenciamento de benefícios.</li>
              <li><b>Sidebar:</b> Navegue pelas opções adicionais no menu lateral para acessar funcionalidades específicas.</li>
            </ol>
            <button className={styles.closeButton} onClick={() => setShowHelp(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default BeneficiosAssistente;
