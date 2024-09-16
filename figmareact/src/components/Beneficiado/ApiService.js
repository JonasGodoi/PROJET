import api from "../../api/api";

export const getHistorico = async () => {
  try {
    const response = await api.get('/historico');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar histórico:', error);
    throw error;
  }
};

export const addHistorico = async (data) => {
  try {
    const response = await api.post('/historico', data);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar histórico:', error);
    throw error;
  }
};

export const updateHistorico = async (id, data) => {
  try {
    const response = await api.put(`/historico/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar histórico:', error);
    throw error;
  }
};

export const deleteHistorico = async (id) => {
  try {
    await api.delete(`/historico/${id}`);
  } catch (error) {
    console.error('Erro ao excluir histórico:', error);
    throw error;
  }
};
