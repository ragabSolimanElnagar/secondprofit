import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { deleteElement } from "../../../utils/redux/action";
import { connect } from "react-redux";

function ConfirmDeleteModel(props) {
  const { show, handleClose, selectedIndex, deleteElement } = props;

  const handelConfirmDelete = () => {
    deleteElement(selectedIndex);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this entry!</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handelConfirmDelete}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteElement: (index) => dispatch(deleteElement(index)),
  };
};

export default connect(null, mapDispatchToProps)(ConfirmDeleteModel);
