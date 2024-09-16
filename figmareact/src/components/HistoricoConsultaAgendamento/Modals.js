import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export function AddModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Usuário</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Nome" />
          </Form.Group>
          <Form.Group controlId="formCodnis">
            <Form.Label>Codnis</Form.Label>
            <Form.Control type="text" placeholder="Codnis" />
          </Form.Group>
          <Form.Group controlId="formEndereco">
            <Form.Label>Endereço</Form.Label>
            <Form.Control type="text" placeholder="Endereço" />
          </Form.Group>
          <Form.Group controlId="formCpf">
            <Form.Label>CPF</Form.Label>
            <Form.Control type="text" placeholder="CPF" />
          </Form.Group>
          <Form.Group controlId="formTelefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="text" placeholder="Telefone" />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="text" placeholder="Date" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
        <Button variant="primary" onClick={handleClose}>Salvar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function EditModal({ show, handleClose, selectedItem }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Usuário</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem?.nome || ""} />
          </Form.Group>
          <Form.Group controlId="formCodnis">
            <Form.Label>Codnis</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem?.codnis || ""} />
          </Form.Group>
          <Form.Group controlId="formEndereco">
            <Form.Label>Endereço</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem?.endereco || ""} />
          </Form.Group>
          <Form.Group controlId="formCpf">
            <Form.Label>CPF</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem?.cpf || ""} />
          </Form.Group>
          <Form.Group controlId="formTelefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem?.telefone || ""} />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem?.date || ""} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
        <Button variant="primary" onClick={handleClose}>Salvar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function DeleteModal({ show, handleClose, selectedItem }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Excluir Usuário</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Tem certeza de que deseja excluir {selectedItem?.nome}?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
        <Button variant="danger" onClick={handleClose}>Excluir</Button>
      </Modal.Footer>
    </Modal>
  );
}
