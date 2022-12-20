import React, { useState } from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { addElement, updateElement } from "../../../utils/redux/action";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export function EntryForm(props) {
  const {
    selected,
    index,
    handleClose,
    updateData,
    addElement,
    entry
  } = props;

  const [item, setItem] = useState(entry);
  const handelChange = (event) => {
    const { value, name } = event.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handelSubmitChange = () => {
    if (selected === "AddNew") {
      addElement(item);
    } else if (selected === "Update") {
      updateData(item, index);
    }
    handleClose();
  };

  return (
    <Form className="form">
      <Form.Group className="mb-3">
        <Form.Control
          name="API"
          className="mb-3"
          type="text"
          placeholder="API"
          value={item?.API}
          onChange={handelChange}
        />
        <Form.Control
          name="Description"
          className="mb-3"
          type="text"
          placeholder="Description"
          value={item?.Description}
          onChange={handelChange}
        />
        <Form.Control
          name="Category"
          className="mb-3"
          type="text"
          placeholder="Category"
          value={item?.Category}
          onChange={handelChange}
        />
        <Form.Control
          name="Auth"
          className="mb-3"
          value={item?.Auth}
          type="text"
          placeholder="Auth"
          onChange={handelChange}
        />
        <Form.Control
          name="Link"
          className="mb-3"
          type="text"
          value={item?.Link}
          placeholder="Link"
          onChange={handelChange}
        />
        <label>HTTPS:</label>
        <Form.Select value={item?.HTTPS} name="HTTPS" onChange={handelChange}>
          <option></option>
          <option value={true}>true</option>
          <option value={false}>false</option>
        </Form.Select>
        <label>Cors:</label>
        <Form.Select value={item?.Cors} name="Cors" onChange={handelChange}>
          <option></option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Form.Select>
      </Form.Group>
      <Modal.Footer>
        <Button
        disabled={!Boolean(item?.Cors||item?.HTTPS||item?.Link||item?.Auth||item?.Category||item?.Description||item?.API)}
        onClick={handelSubmitChange} variant="primary">
          Save Changes
        </Button>
      </Modal.Footer>
    </Form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateData: (item, index) => dispatch(updateElement(item, index)),
    addElement: (form) => dispatch(addElement(form)),
  };
};

export default connect(null, mapDispatchToProps)(EntryForm);
