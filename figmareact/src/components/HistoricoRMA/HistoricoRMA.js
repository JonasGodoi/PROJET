import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md"; // Ícone de seta para voltar
import api from "../../api/api"; // Importando o módulo api
import styles from "./HistoricoRMA.module.css";
import Sidebar from "./Sidebar";

const HistoricoRMA = () => {
  const [mes, setMes] = useState("");
  const [historico, setHistorico] = useState([]);
  const [error, setError] = useState(null);
  const [showHelp, setShowHelp] = useState(false); // Estado para controlar o modal de ajuda
  const navigate = useNavigate();

  const meses = [
    "JANEIRO",
    "FEVEREIRO",
    "MARCO",
    "ABRIL",
    "MAIO",
    "JUNHO",
    "JULHO",
    "AGOSTO",
    "SETEMBRO",
    "OUTUBRO",
    "NOVEMBRO",
    "DEZEMBRO",
  ];

  const handleFetchHistorico = async () => {
    if (!mes) {
      setError("Por favor, selecione um mês.");
      return;
    }

    try {
      const response = await api.get(`/Rma/mes/${mes}`);
      setHistorico(response.data);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
    }
  };

  const handleEdit = (id) => {
    navigate(`/editarRMA/${id}`);
  };

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
          <div className={styles.column}>
            <Sidebar />
          </div>
          <div className={styles.column}>
            <h2>Histórico RMA</h2>

            <div className={styles.inputGroup}>
              <label htmlFor="mesSelect">Escolha o mês:</label>
              <select
                id="mesSelect"
                value={mes}
                onChange={(e) => setMes(e.target.value)}
              >
                <option value="">Selecione um mês</option>
                {meses.map((m, index) => (
                  <option key={index} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <button onClick={handleFetchHistorico}>Buscar Histórico</button>
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.dataRows}>
              {historico.map((item) => (
                <div className={styles.row} key={item.id}>
                  {/* Conteúdo dos dados do histórico aqui */}
                  <div className={styles.inputGroup}>
                    <button onClick={() => handleEdit(item.id)}>Editar</button>
                  </div>
                </div>
              ))}
            </div>
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
            <h2>Instruções para o Histórico RMA</h2>
            <p>Esta página exibe o histórico do RMA baseado no mês selecionado. Para usá-la:</p>
            <ol>
              <li>Escolha o mês na lista e clique em "Buscar Histórico".</li>
              <li>Veja as informações detalhadas e clique em "Editar" para modificar entradas específicas.</li>
            </ol>
            <button className={styles.closeButton} onClick={() => setShowHelp(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default HistoricoRMA;
