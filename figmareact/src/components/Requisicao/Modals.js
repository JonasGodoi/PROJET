import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export function AddModal({ show, handleClose, handleSave }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newItem = {
      CodReq: formData.get('CodReq'),
      Descrição: formData.get('Descrição'),
      Status: formData.get('Status'),
      CodNIS: formData.get('CodNIS'),
      CodBeneficio: formData.get('CodBeneficio'),
      date: formData.get('Date'),
    };
    handleSave(newItem);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="formCodReq">
            <Form.Label>CodReq</Form.Label>
            <Form.Control name="CodReq" type="text" placeholder="CodReq" />
          </Form.Group>
          <Form.Group controlId="formDescrição">
            <Form.Label>Descrição</Form.Label>
            <Form.Control name="Descrição" type="text" placeholder="Descrição" />
          </Form.Group>
          <Form.Group controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control name="Status" type="text" placeholder="Status" />
          </Form.Group>
          <Form.Group controlId="formCodNIS">
            <Form.Label>CodNIS</Form.Label>
            <Form.Control name="CodNIS" type="text" placeholder="CodNIS" />
          </Form.Group>
          <Form.Group controlId="formCodBeneficio">
            <Form.Label>CodBeneficio</Form.Label>
            <Form.Control name="CodBeneficio" type="text" placeholder="CodBeneficio" />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control name="Date" type="text" placeholder="Date" />
          </Form.Group>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" type="submit">Salvar</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export function EditModal({ show, handleClose, selectedItem, handleSave }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedItem = {
      CodReq: formData.get('CodReq'),
      Descrição: formData.get('Descrição'),
      Status: formData.get('Status'),
      CodNIS: formData.get('CodNIS'),
      CodBeneficio: formData.get('CodBeneficio'),
      date: formData.get('Date'),
    };
    handleSave(updatedItem);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="formCodReq">
            <Form.Label>CodReq</Form.Label>
            <Form.Control
              name="CodReq"
              type="text"
              placeholder="CodReq"
              defaultValue={selectedItem?.CodReq || ""}
            />
          </Form.Group>
          <Form.Group controlId="formDescrição">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              name="Descrição"
              type="text"
              placeholder="Descrição"
              defaultValue={selectedItem?.Descrição || ""}
            />
          </Form.Group>
          <Form.Group controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control
              name="Status"
              type="text"
              placeholder="Status"
              defaultValue={selectedItem?.Status || ""}
            />
          </Form.Group>
          <Form.Group controlId="formCodNIS">
            <Form.Label>CodNIS</Form.Label>
            <Form.Control
              name="CodNIS"
              type="text"
              placeholder="CodNIS"
              defaultValue={selectedItem?.CodNIS || ""}
            />
          </Form.Group>
          <Form.Group controlId="formCodBeneficio">
            <Form.Label>CodBeneficio</Form.Label>
            <Form.Control
              name="CodBeneficio"
              type="text"
              placeholder="CodBeneficio"
              defaultValue={selectedItem?.CodBeneficio || ""}
            />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              name="Date"
              type="text"
              placeholder="Date"
              defaultValue={selectedItem?.date || ""}
            />
          </Form.Group>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" type="submit">Salvar</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export function DeleteModal({ show, handleClose, handleDelete }) {
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
        <Button variant="danger" onClick={() => { handleDelete(); handleClose(); }}>
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
