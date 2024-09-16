import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export function AddModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formCodReq">
            <Form.Label>CodReq</Form.Label>
            <Form.Control type="text" placeholder="CodReq" />
          </Form.Group>
          <Form.Group controlId="formDescrição">
            <Form.Label>Descrição</Form.Label>
            <Form.Control type="text" placeholder="Descrição" />
          </Form.Group>
          <Form.Group controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control type="text" placeholder="Status" />
          </Form.Group>
          <Form.Group controlId="formCodNIS">
            <Form.Label>CodNIS</Form.Label>
            <Form.Control type="text" placeholder="CodNIS" />
          </Form.Group>
          <Form.Group controlId="formCodBeneficio">
            <Form.Label>CodBeneficio</Form.Label>
            <Form.Control type="text" placeholder="CodBeneficio" />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="text" placeholder="Date" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
        <Button
          variant="primary"
          onClick={() => {
            console.log("Criar item");
            handleClose();
          }}
        >
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export function EditModal({ show, handleClose, selectedItem }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formCodReq">
            <Form.Label>CodReq</Form.Label>
            <Form.Control
              type="text"
              placeholder="CodReq"
              defaultValue={selectedItem?.CodReq || ""}
            />
          </Form.Group>
          <Form.Group controlId="formDescrição">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              type="text"
              placeholder="Descrição"
              defaultValue={selectedItem?.Descrição || ""}
            />
          </Form.Group>
          <Form.Group controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              placeholder="Status"
              defaultValue={selectedItem?.Status || ""}
            />
          </Form.Group>
          <Form.Group controlId="formCodNIS">
            <Form.Label>CodNIS</Form.Label>
            <Form.Control
              type="text"
              placeholder="CodNIS"
              defaultValue={selectedItem?.CodNIS || ""}
            />
          </Form.Group>
          <Form.Group controlId="formCodBeneficio">
            <Form.Label>CodBeneficio</Form.Label>
            <Form.Control
              type="text"
              placeholder="CodBeneficio"
              defaultValue={selectedItem?.CodBeneficio || ""}
            />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="Date"
              defaultValue={selectedItem?.date || ""}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
        <Button
          variant="primary"
          onClick={() => {
            console.log("Atualizar item");
            handleClose();
          }}
        >
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export function DeleteModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Excluir Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Tem certeza de que deseja excluir este registro?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
        <Button
          variant="danger"
          onClick={() => {
            console.log("Excluir item");
            handleClose();
          }}
        >
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
