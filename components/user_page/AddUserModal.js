import { useState, useEffect} from "react";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";


function AddUserModal(props) {
    return (
      <div>
       <Modal isOpen={props.open} toggle={props.toggleFunc}>
        <ModalHeader toggle={props.toggleFunc}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.toggleFunc}>Do Something</Button>{' '}
          <Button color="secondary" onClick={props.toggleFunc}>Cancel</Button>
        </ModalFooter>
       </Modal>
      </div>
    );
  }
  export default AddUserModal