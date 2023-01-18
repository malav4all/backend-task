import React from 'react';
import {Modal,Button} from "react-bootstrap"
import {Register} from "../../Pages"
const  RegisterModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Register close={props.onHide} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  ); 
}

export default RegisterModal;
