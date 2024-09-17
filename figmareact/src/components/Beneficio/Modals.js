import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const Modals = ({
  showAddModal,
  handleCloseAddModal,
  showEditModal,
  handleCloseEditModal,
  showDeleteModal,
  handleCloseDeleteModal,
  selectedItem,
  onSave,
  onDelete
}) => {
  const [formData, setFormData] = useState({
    CodBeneficio: "",
    Categoria: "",
    DescriçãoBeneficio: ""
  });

  useEffect(() => {
    if (selectedItem) {
      setFormData({
        CodBeneficio: selectedItem.CodBeneficio || "",
        Categoria: selectedItem.Categoria || "",
        DescriçãoBeneficio: selectedItem.DescriçãoBeneficio || ""
      });
    }
  }, [selectedItem]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave({ ...formData, id: selectedItem?.id });
    handleCloseAddModal();
    handleCloseEditModal();
  };

  const handleDelete = () => {
    onDelete();
    handleCloseDeleteModal();
  };

  return (
    <>
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Benefício</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCategoria">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type="text"
                placeholder="Categoria"
                name="Categoria"
                value={formData.Categoria}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formDescriçãoBeneficio">
              <Form.Label>Descrição Benefício</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descrição Benefício"
                name="DescriçãoBeneficio"
                value={formData.DescriçãoBeneficio}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Benefício</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCategoria">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type="text"
                placeholder="Categoria"
                name="Categoria"
                value={formData.Categoria}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formDescriçãoBeneficio">
              <Form.Label>Descrição Benefício</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descrição Benefício"
                name="DescriçãoBeneficio"
                value={formData.DescriçãoBeneficio}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Excluir Benefício</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Tem certeza de que deseja excluir o benefício?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modals;
