import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function AddEditModal({ show, handleClose, title, item, onSave }) {
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    nis: '',
    cpf: '',
    endereco: '',
    telefone: '',
    Paif: '',
    Bolsa: ''
  });

  useEffect(() => {
    if (item) {
      setFormData({
        id: item.id || '',
        username: item.username || '',
        nis: item.nis || '',
        cpf: item.cpf || '',
        endereco: item.endereco || '',
        telefone: item.telefone || ''
      });
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formNis">
            <Form.Label>NIS</Form.Label>
            <Form.Control
              type="text"
              name="nis"
              value={formData.nis}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formCpf">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formEndereco">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
            />
                      </Form.Group>
          <Form.Group controlId="formEndereco">
            <Form.Label>Paif</Form.Label>
            <Form.Control
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
            />
                      </Form.Group>
          <Form.Group controlId="formEndereco">
            <Form.Label>Bolsa</Form.Label>
            <Form.Control
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
            />
                      </Form.Group>
          <Form.Group controlId="formEndereco">
            <Form.Label>Pobreza</Form.Label>
            <Form.Control
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
            />
                      </Form.Group>
          <Form.Group controlId="formEndereco">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
            />
                      </Form.Group>
          <Form.Group controlId="formEndereco">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
            />
                      </Form.Group>
          <Form.Group controlId="formEndereco">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
            />

          </Form.Group>
          
          <Form.Group controlId="formTelefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="text"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
          </Form.Group>
          
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddEditModal;
