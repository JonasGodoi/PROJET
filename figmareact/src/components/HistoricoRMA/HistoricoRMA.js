import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api"; // Importando o módulo api
import styles from "./HistoricoRMA.module.css";
import Sidebar from "./Sidebar";

const HistoricoRMA = () => {
  const [mes, setMes] = useState("");
  const [historico, setHistorico] = useState([]);
  const [error, setError] = useState(null);
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
      // Enviando o mês selecionado para o backend
      const response = await api.get(`/Rma/mes/${mes}`);
      setHistorico(response.data); // Espera-se que o data já contenha os dados
      setError(null); // Limpa o erro se a chamada for bem-sucedida
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
    }
  };

  const handleEdit = (id) => {
    navigate(`/editarRMA/${id}`);
  };

  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <div className={styles.content}>
          <div className={styles.column}>
            <Sidebar />
          </div>
          <div className={styles.column}>
            <h2>Historico RMA</h2>

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
                  <div className={styles.inputGroup}>
                    <label>Nome da Unidade:</label>
                    <span>{item.unidade}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Nº da Unidade:</label>
                    <span>{item.numeroUnidade}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Endereço:</label>
                    <span>{item.endereco}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Município:</label>
                    <span>{item.municipio}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>UF:</label>
                    <span>{item.uf}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Mês:</label>
                    <span>{item.mes}</span>
                  </div>

                  <h3>Bloco 1 - Famílias em acompanhamento pelo PAIF</h3>

                  <div className={styles.inputGroup}>
                    <label>
                      Total de famílias em acompanhamento pelo PAIF:
                    </label>
                    <span>{item.familiasPAIF}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Novas famílias inseridas no acompanhamento:</label>
                    <span>{item.novasFamiliasPAIF}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Famílias em situação de extrema pobreza:</label>
                    <span>{item.familiasExtremaPobreza}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Famílias beneficiárias do Bolsa Família:</label>
                    <span>{item.bolsaFamilia}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>
                      Famílias em descumprimento de condicionalidades:
                    </label>
                    <span>{item.descumprimentoCondicionalidades}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Famílias com membros beneficiários do BPC:</label>
                    <span>{item.bpc}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>
                      Famílias com crianças ou adolescentes em trabalho
                      infantil:
                    </label>
                    <span>{item.trabalhoInfantil}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>
                      Famílias com crianças ou adolescentes em acolhimento:
                    </label>
                    <span>{item.acolhimento}</span>
                  </div>
                  <h3>Bloco 2 - Atendimentos Particularizados</h3>
                  <div className={styles.inputGroup}>
                    <label>Total de atendimentos no mês de referência:</label>
                    <span>{item.atendimentosCRAS}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>
                      Famílias encaminhadas para inclusão no Cadastro Único:
                    </label>
                    <span>{item.cadastroUnico}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>
                      Famílias encaminhadas para atualização cadastral:
                    </label>
                    <span>{item.atualizacaoCadastral}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Indivíduos encaminhados para acesso ao BPC:</label>
                    <span>{item.bpcIndividuos}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Famílias encaminhadas para o CREAS:</label>
                    <span>{item.creas}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Visitas domiciliares realizadas:</label>
                    <span>{item.visitasDomiciliares}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Auxílios-natalidade concedidos/entregues:</label>
                    <span>{item.auxiliosNatalidade}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Auxílios-funeral concedidos/entregues:</label>
                    <span>{item.auxiliosFuneral}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>
                      Outros benefícios eventuais concedidos/entregues:
                    </label>
                    <span>{item.outrosBeneficios}</span>
                  </div>
                  <h3>Bloco 3 - Atendimentos Coletivos</h3>
                  <div className={styles.inputGroup}>
                    <label>Total de atendimentos coletivos realizados:</label>
                    <span>{item.atendimentosColetivos}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Famílias participando de grupos PAIF:</label>
                    <span>{item.familiasParticipantesPAIF}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Crianças de 0 a 6 anos em SCFV:</label>
                    <span>{item.criancas06SCFV}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Crianças de 7 a 14 anos em SCFV:</label>
                    <span>{item.criancas714SCFV}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Adolescentes de 15 a 17 anos em SCFV:</label>
                    <span>{item.adolescentes1517SCFV}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Adultos em SCFV:</label>
                    <span>{item.adultosSCFV}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Idosos em SCFV:</label>
                    <span>{item.idososSCFV}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Palestras e oficinas realizadas:</label>
                    <span>{item.palestrasOficinas}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Pessoas com deficiência atendidas:</label>
                    <span>{item.pessoasDeficiencia}</span>
                  </div>

                  <div className={styles.inputGroup}>
                    <button onClick={() => handleEdit(item.id)}>Editar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HistoricoRMA;
