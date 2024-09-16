import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const Modals = ({
  showAddModal,
  handleCloseAddModal,
  showEditModal,
  handleCloseEditModal,
  showDeleteModal,
  handleCloseDeleteModal,
  selectedItem,
}) => {
  return (
    <>
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Benefício</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCodBeneficio">
              <Form.Label>CodBeneficio</Form.Label>
              <Form.Control type="text" placeholder="CodBeneficio" />
            </Form.Group>
            <Form.Group controlId="formCategoria">
              <Form.Label>Categoria</Form.Label>
              <Form.Control type="text" placeholder="Categoria" />
            </Form.Group>
            <Form.Group controlId="formDescriçãoBeneficio">
              <Form.Label>Descrição Beneficio</Form.Label>
              <Form.Control type="text" placeholder="Descrição Beneficio" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddModal}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              console.log("Criar benefício");
              handleCloseAddModal();
            }}
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para editar um benefício */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Benefício</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCodBeneficio">
              <Form.Label>CodBeneficio</Form.Label>
              <Form.Control
                type="text"
                placeholder="CodBeneficio"
                defaultValue={selectedItem?.CodBeneficio || ""}
              />
            </Form.Group>
            <Form.Group controlId="formCategoria">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type="text"
                placeholder="Categoria"
                defaultValue={selectedItem?.Categoria || ""}
              />
            </Form.Group>
            <Form.Group controlId="formDescriçãoBeneficio">
              <Form.Label>Descrição Beneficio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descrição Beneficio"
                defaultValue={selectedItem?.DescriçãoBeneficio || ""}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              console.log("Editar benefício");
              handleCloseEditModal();
            }}
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para confirmar exclusão de um benefício */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Excluir Benefício</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza de que deseja excluir o benefício {selectedItem?.CodBeneficio}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancelar
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              console.log("Excluir benefício");
              handleCloseDeleteModal();
            }}
          >
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modals;
