import React, { useState } from "react";
import logoImage from "../images/logo (1).png"; // Ajuste o caminho conforme sua estrutura
import styles from './MenuAssistente.module.css';

function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal de ajuda
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false); // Modal de confirmação de logout

  // Função que abre o modal de confirmação de logout
  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true); // Exibe o modal de confirmação
  };

  // Função que confirma o logout
  const confirmLogout = () => {
    localStorage.removeItem("authToken"); // Exemplo de remoção de item de sessão
    window.location.href = "/login"; // Redireciona para a página de login
  };

  // Função que cancela o logout
  const cancelLogout = () => {
    setShowLogoutConfirmation(false); // Fecha o modal e cancela o logout
  };

  // Função que abre o modal de ajuda
  const handleHelpClick = () => {
    setIsModalOpen(true);
  };

  // Função que fecha o modal de ajuda
  const handleCloseModal = () => {
    setIsModalOpen(false);
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

      {/* Botão de Logout */}
      <button className={styles.logoutButton} onClick={handleLogoutClick}>
        <i className="fas fa-arrow-left"></i> Sair
      </button>

      {/* Botão de ajuda */}
      <button className={styles.helpButton} onClick={handleHelpClick}>
        ?
      </button>

      {/* Modal de confirmação de logout */}
      {showLogoutConfirmation && (
        <div className={styles.modalOverlay} onClick={cancelLogout}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2><b>Você tem certeza que deseja sair?</b></h2>
            <button className={styles.confirmButton} onClick={confirmLogout}>Sim</button>
            <button className={styles.cancelButton} onClick={cancelLogout}>Não</button>
          </div>
        </div>
      )}

      {/* Modal de instruções */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>Instruções</h2>
            <p>Bem-vindo ao menu da assistente social! Abaixo estão as opções disponíveis para você gerenciar usuários, beneficiários, benefícios e outras funções importantes do sistema.</p>
            
            <h3>1. Gerenciar Usuários</h3>
            <p>Utilize essa opção para gerenciar os dados dos usuários registrados no sistema. Aqui, você pode visualizar, editar ou excluir informações de qualquer usuário. Certifique-se de revisar todas as alterações antes de salvá-las.</p>
            
            <h3>2. Beneficiário (Gerenciar)</h3>
            <p>Use essa funcionalidade para gerenciar os beneficiários registrados. Você pode adicionar, editar ou excluir beneficiários, bem como revisar seus dados e histórico. Verifique se as informações dos beneficiários estão corretas antes de fazer qualquer alteração.</p>
            
            <h3>3. Benefícios (Gerenciar)</h3>
            <p>Essa opção permite gerenciar os benefícios disponíveis para os beneficiários. Você pode adicionar novos benefícios, editar os existentes ou removê-los quando necessário. Certifique-se de que os benefícios atribuídos estejam corretos e atualizados.</p>
            
            <h3>4. Requisições</h3>
            <p>Acesse esta área para visualizar e gerenciar as requisições feitas pelos beneficiários ou outros usuários. Aqui, você pode aprovar, negar ou revisar as solicitações conforme as regras e critérios estabelecidos. Verifique cada requisição cuidadosamente antes de tomar qualquer decisão.</p>
            
            <h3>5. Gerar Relatório</h3>
            <p>Utilize esta opção para gerar relatórios detalhados sobre usuários, beneficiários, benefícios ou requisições. Você pode personalizar o relatório conforme o período ou os dados que deseja analisar.</p>
            
            <button className={styles.closeButton} onClick={handleCloseModal}>Fechar</button>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
