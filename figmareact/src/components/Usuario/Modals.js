import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

// AddModal Component
export function AddModal({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Usuário</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Nome" />
          </Form.Group>
          <Form.Group controlId="formCod">
            <Form.Label>Código</Form.Label>
            <Form.Control type="text" placeholder="Código" />
          </Form.Group>
          <Form.Group controlId="formLogin">
            <Form.Label>Login</Form.Label>
            <Form.Control type="text" placeholder="Login" />
          </Form.Group>
          <Form.Group controlId="formSenha">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="text" placeholder="Senha" />
          </Form.Group>
          <Form.Group controlId="formRequisicao">
            <Form.Label>Requisição</Form.Label>
            <Form.Control type="text" placeholder="Requisição" />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Data</Form.Label>
            <Form.Control type="text" placeholder="Data" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            console.log("Criar item");
            onClose();
          }}
        >
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

// EditModal Component
export function EditModal({ show, onClose, item }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Usuário</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" defaultValue={item?.nome} />
          </Form.Group>
          <Form.Group controlId="formCod">
            <Form.Label>Código</Form.Label>
            <Form.Control type="text" defaultValue={item?.cod} />
          </Form.Group>
          <Form.Group controlId="formLogin">
            <Form.Label>Login</Form.Label>
            <Form.Control type="text" defaultValue={item?.login} />
          </Form.Group>
          <Form.Group controlId="formSenha">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="text" defaultValue={item?.senha} />
          </Form.Group>
          <Form.Group controlId="formRequisicao">
            <Form.Label>Requisição</Form.Label>
            <Form.Control type="text" defaultValue={item?.requisicao} />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Data</Form.Label>
            <Form.Control type="text" defaultValue={item?.date} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            console.log("Salvar alterações");
            onClose();
          }}
        >
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

// DeleteModal Component
export function DeleteModal({ show, onClose, item }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Excluir Usuário</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Tem certeza de que deseja excluir o item {item?.nome}?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            console.log("Excluir item");
            onClose();
          }}
        >
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
