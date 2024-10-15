import React, { useEffect, useState } from 'react';
import api from '../../api/api'; // Certifique-se de que o cliente da API esteja configurado corretamente

const HistoricoCRAS = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    // Função para buscar os dados do backend
    const fetchHistory = async () => {
      try {
        const response = await api.get('/Rma'); // Endpoint correto para buscar os dados do histórico
        setHistoryData(response.data);
      } catch (error) {
        console.error('Erro ao buscar o histórico:', error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <h2>Histórico de Registros do CRAS</h2>
      <table>
        <thead>
          <tr>
            <th>Unidade</th>
            <th>Nº Unidade</th>
            <th>Endereço</th>
            <th>Município</th>
            <th>UF</th>
            <th>Famílias PAIF</th>
            <th>Novas Famílias PAIF</th>
            <th>Famílias Extrema Pobreza</th>
            <th>Bolsa Família</th>
            <th>Descumprimento de Condicionalidades</th>
            <th>BPC</th>
            <th>Trabalho Infantil</th>
            <th>Acolhimento</th>
            <th>Atendimentos CRAS</th>
            <th>Cadastro Único</th>
            <th>Atualização Cadastral</th>
            <th>BPC - Indivíduos</th>
            <th>CREAS</th>
            <th>Visitas Domiciliares</th>
            <th>Auxílios Natalidade</th>
            <th>Auxílios Funeral</th>
            <th>Outros Benefícios</th>
            <th>Atendimentos Coletivos</th>
            <th>Famílias Participantes PAIF</th>
            <th>Crianças 0-6 SCFV</th>
            <th>Crianças 7-14 SCFV</th>
            <th>Adolescentes 15-17 SCFV</th>
            <th>Adultos SCFV</th>
            <th>Idosos SCFV</th>
            <th>Palestras e Oficinas</th>
            <th>Pessoas com Deficiência</th>
          </tr>
        </thead>
        <tbody>
          {historyData.length > 0 ? (
            historyData.map((item, index) => (
              <tr key={index}>
                <td>{item.unidade}</td>
                <td>{item.numeroUnidade}</td>
                <td>{item.endereco}</td>
                <td>{item.municipio}</td>
                <td>{item.uf}</td>
                <td>{item.familiasPAIF}</td>
                <td>{item.novasFamiliasPAIF}</td>
                <td>{item.familiasExtremaPobreza}</td>
                <td>{item.bolsaFamilia}</td>
                <td>{item.descumprimentoCondicionalidades}</td>
                <td>{item.bpc}</td>
                <td>{item.trabalhoInfantil}</td>
                <td>{item.acolhimento}</td>
                <td>{item.atendimentosCRAS}</td>
                <td>{item.cadastroUnico}</td>
                <td>{item.atualizacaoCadastral}</td>
                <td>{item.bpcIndividuos}</td>
                <td>{item.creas}</td>
                <td>{item.visitasDomiciliares}</td>
                <td>{item.auxiliosNatalidade}</td>
                <td>{item.auxiliosFuneral}</td>
                <td>{item.outrosBeneficios}</td>
                <td>{item.atendimentosColetivos}</td>
                <td>{item.familiasParticipantesPAIF}</td>
                <td>{item.criancas06SCFV}</td>
                <td>{item.criancas714SCFV}</td>
                <td>{item.adolescentes1517SCFV}</td>
                <td>{item.adultosSCFV}</td>
                <td>{item.idososSCFV}</td>
                <td>{item.palestrasOficinas}</td>
                <td>{item.pessoasDeficiencia}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="31">Nenhum dado encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricoCRAS;
