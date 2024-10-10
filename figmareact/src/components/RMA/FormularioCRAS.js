import React, { useEffect, useState } from 'react';
import './FormularioCRAS.css';

const FormularioCRAS = () => {
  const [formData, setFormData] = useState({
    unidade: '',
    numeroUnidade: '',
    endereco: '',
    municipio: '',
    uf: '',
    familiasPAIF: '',
    novasFamiliasPAIF: '',
    familiasExtremaPobreza: '',
    bolsaFamilia: '',
    descumprimentoCondicionalidades: '',
    bpc: '',
    trabalhoInfantil: '',
    acolhimento: '',
    atendimentosCRAS: '',
    cadastroUnico: '',
    atualizacaoCadastral: '',
    bpcIndividuos: '',
    creas: '',
    visitasDomiciliares: '',
    auxiliosNatalidade: '',
    auxiliosFuneral: '',
    outrosBeneficios: '',
    atendimentosColetivos: '',
    familiasParticipantesPAIF: '',
    criancas06SCFV: '',
    criancas714SCFV: '',
    adolescentes1517SCFV: '',
    adultosSCFV: '',
    idososSCFV: '',
    palestrasOficinas: '',
    pessoasDeficiencia: '',
    
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  useEffect(() => {
    document.body.style.zoom = "80%";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio do formulário
    console.log('Formulário enviado:', formData);
  };

  return (
    <form className="formulario-cras" onSubmit={handleSubmit}>
      <h2>Formulário de Registro Mensal de Atendimentos do CRAS</h2>

      <div className="input-group">
        <label>Nome da Unidade:</label>
        <input type="text" name="unidade" value={formData.unidade} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Nº da Unidade:</label>
        <input type="text" name="numeroUnidade" value={formData.numeroUnidade} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Endereço:</label>
        <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Município:</label>
        <input type="text" name="municipio" value={formData.municipio} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>UF:</label>
        <input type="text" name="uf" value={formData.uf} onChange={handleChange} />
      </div>

      <h3>Bloco 1 - Famílias em acompanhamento pelo PAIF</h3>

      <div className="input-group">
        <label>Total de famílias em acompanhamento pelo PAIF:</label>
        <input type="number" name="familiasPAIF" value={formData.familiasPAIF} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Novas famílias inseridas no acompanhamento:</label>
        <input type="number" name="novasFamiliasPAIF" value={formData.novasFamiliasPAIF} onChange={handleChange} />
      </div>

      <h3>Perfil das novas famílias</h3>

      <div className="input-group">
        <label>Famílias em situação de extrema pobreza:</label>
        <input type="number" name="familiasExtremaPobreza" value={formData.familiasExtremaPobreza} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Famílias beneficiárias do Bolsa Família:</label>
        <input type="number" name="bolsaFamilia" value={formData.bolsaFamilia} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Famílias em descumprimento de condicionalidades:</label>
        <input type="number" name="descumprimentoCondicionalidades" value={formData.descumprimentoCondicionalidades} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Famílias com membros beneficiários do BPC:</label>
        <input type="number" name="bpc" value={formData.bpc} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Famílias com crianças ou adolescentes em trabalho infantil:</label>
        <input type="number" name="trabalhoInfantil" value={formData.trabalhoInfantil} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Famílias com crianças ou adolescentes em acolhimento:</label>
        <input type="number" name="acolhimento" value={formData.acolhimento} onChange={handleChange} />
      </div>

      <h3>Bloco 2 - Atendimentos Particularizados</h3>

      <div className="input-group">
        <label>Total de atendimentos no mês de referência:</label>
        <input type="number" name="atendimentosCRAS" value={formData.atendimentosCRAS} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Famílias encaminhadas para inclusão no Cadastro Único:</label>
        <input type="number" name="cadastroUnico" value={formData.cadastroUnico} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Famílias encaminhadas para atualização cadastral:</label>
        <input type="number" name="atualizacaoCadastral" value={formData.atualizacaoCadastral} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Indivíduos encaminhados para acesso ao BPC:</label>
        <input type="number" name="bpcIndividuos" value={formData.bpcIndividuos} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Famílias encaminhadas para o CREAS:</label>
        <input type="number" name="creas" value={formData.creas} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Visitas domiciliares realizadas:</label>
        <input type="number" name="visitasDomiciliares" value={formData.visitasDomiciliares} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Auxílios-natalidade concedidos/entregues:</label>
        <input type="number" name="auxiliosNatalidade" value={formData.auxiliosNatalidade} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Auxílios-funeral concedidos/entregues:</label>
        <input type="number" name="auxiliosFuneral" value={formData.auxiliosFuneral} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Outros benefícios eventuais concedidos/entregues:</label>
        <input type="number" name="outrosBeneficios" value={formData.outrosBeneficios} onChange={handleChange} />
      </div>

      <h3>Bloco 3 - Atendimentos Coletivos</h3>

      <div className="input-group">
        <label>Total de atendimentos coletivos realizados:</label>
        <input type="number" name="atendimentosColetivos" value={formData.atendimentosColetivos} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Famílias participando de grupos PAIF:</label>
        <input type="number" name="familiasParticipantesPAIF" value={formData.familiasParticipantesPAIF} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Crianças de 0 a 6 anos em SCFV:</label>
        <input type="number" name="criancas06SCFV" value={formData.criancas06SCFV} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Crianças de 7 a 14 anos em SCFV:</label>
        <input type="number" name="criancas714SCFV" value={formData.criancas714SCFV} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Adolescentes de 15 a 17 anos em SCFV:</label>
        <input type="number" name="adolescentes1517SCFV" value={formData.adolescentes1517SCFV} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Adultos de 18 a 59 anos em SCFV:</label>
        <input type="number" name="adultosSCFV" value={formData.adultosSCFV} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Idosos em SCFV:</label>
        <input type="number" name="idososSCFV" value={formData.idososSCFV} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Pessoas participando de palestras ou oficinas:</label>
        <input type="number" name="palestrasOficinas" value={formData.palestrasOficinas} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>Pessoas com deficiência em SCFV ou PAIF:</label>
        <input type="number" name="pessoasDeficiencia" value={formData.pessoasDeficiencia} onChange={handleChange} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioCRAS;
