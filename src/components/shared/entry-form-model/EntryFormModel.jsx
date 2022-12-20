import React from 'react';
import EntryForm from "../../entries/entry-form/EntryForm";
import Modal from "react-bootstrap/Modal";

function EntryFormModel(props) {
    const {show,handleClose,selectedEntryData } =props;
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEntryData?.entry?'update':"Add" }</Modal.Title>
        </Modal.Header>
        <EntryForm selected={selectedEntryData?.entry?'Update':"AddNew" }entry={selectedEntryData?.entry} index={selectedEntryData?.index} handleClose={handleClose} />
      </Modal>
    );
}

export default EntryFormModel;