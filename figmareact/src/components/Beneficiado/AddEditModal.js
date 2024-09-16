import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function AddEditModal({ show, handleClose, title, item, onSave }) {
  const [nome, setNome] = useState("");
  const [codnis, setCodnis] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (item) {
      setNome(item.nome || "");
      setCodnis(item.codnis || "");
      setEndereco(item.endereco || "");
      setCpf(item.cpf || "");
      setTelefone(item.telefone || "");
      setDate(item.date || "");
    }
  }, [item]);

  const handleSave = () => {
    const newItem = {
      nome,
      codnis,
      endereco,
      cpf,
      telefone,
      date,
      ...(item?.id ? { id: item.id } : {}),
    };
    onSave(newItem);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formCodnis">
            <Form.Label>Codnis</Form.Label>
            <Form.Control
              type="text"
              placeholder="Codnis"
              value={codnis}
              onChange={(e) => setCodnis(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formEndereco">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="text"
              placeholder="Endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formCpf">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formTelefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddEditModal;
