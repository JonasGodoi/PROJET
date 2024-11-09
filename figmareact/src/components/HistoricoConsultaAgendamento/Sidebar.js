import React, { useState } from "react";
import logoImage from "../images/logo (1).png"; // Ajuste o caminho conforme sua estrutura
import { MdArrowBack } from "react-icons/md"; // Importando o ícone de seta para voltar
import styles from './ConsultarHistoricoAgen.module.css'; // Importando os estilos

function Sidebar() {
  const [showHelp, setShowHelp] = useState(false);

  const toggleHelp = () => setShowHelp((prev) => !prev);

  const handleBack = () => {
    // Lógica para voltar à página anterior
    window.history.back(); // Navega para a página anterior
  };

  return (
    <aside className={styles.sidebarContainer}>
      <img 
        loading="lazy"
        src={logoImage}
        alt="Logo da Secretaria"
        className={styles.logo}
      />
      <h1 className={styles.sidebarTitle}>
        Secretaria de Assistência Social
      </h1>
      <h2 className={styles.formTitle}>
        Histórico de Ações
      </h2>

      {/* Botão de voltar (apenas a seta para a esquerda) */}
      <button className={styles.backButton} onClick={handleBack}>
        <MdArrowBack /> {/* A seta foi inserida diretamente no CSS, sem texto adicional */}
      </button>

      {/* Botão de ajuda */}
      <button className={styles.helpButton} onClick={toggleHelp}>?</button>

      {/* Modal de ajuda */}
      {showHelp && (
        <div className={styles.modalOverlay} onClick={toggleHelp}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>Instruções</h2>
            <p>Nesta página, você pode visualizar o histórico de ações realizadas no sistema e gerenciar as informações relacionadas aos beneficiários. Utilize as funcionalidades abaixo para pesquisar e modificar os registros.</p>
            <ol>
              <li>
                <strong>Pesquisar pelo Nome do Beneficiário:</strong>
                <p>Use o campo de pesquisa para localizar ações específicas associadas a um beneficiário. Quanto mais específico for o nome informado, mais precisa será a busca.</p>
              </li>
              <li>
                <strong>Botão Editar:</strong>
                <p>Após localizar o beneficiário desejado, clique no botão "Editar" ao lado do registro para modificar os dados.</p>
              </li>
              <li>
                <strong>Botão Excluir:</strong>
                <p>Clique no botão "Excluir" para remover um registro. Uma confirmação será solicitada antes de concluir.</p>
              </li>
              <li>
                <strong>Dicas:</strong>
                <p>Verifique se o nome está correto e revise as alterações antes de salvar.</p>
              </li>
            </ol>
            <button className={styles.closeButton} onClick={toggleHelp}>Fechar</button>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
