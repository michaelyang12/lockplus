import { useState, useEffect} from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import UsersFormSidebar from "./user_sidebar/UsersFormSidebar";

function AddUserModal(props) {
    const [input, setInput] = useState("");
    const addUser = () => {
        if (input.length > 0) {
            console.log(input + " Added!");
            props.toggleFunc;
            var user = {
                "username": input,
                "function": undefined,
            }
            props.usersArray.push(user);
        }
    }

    return (
        <Modal isOpen={props.open} toggle={props.toggleFunc} modalClassName="relative flex h-screen w-screen bg-gray-800 text-white">
            <div class="container box-border h-screen w-10/12 p-4 border-4">
                <ModalHeader toggle={props.toggleFunc}> </ModalHeader>
                <ModalBody>
                    <div className="text-xl font-bold font-lockplus mt-2 text-left text-lockplus-blue pr-4 ml-20 hover:text-lockplus-hoverblue">
                        Add a user
                    </div>
                    <div>
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="h-8 w-48 bg-lockplus-opacGray bg-opacity-50 ml-12 mt-4 focus: outline-none border-2 border-lockplus-blue rounded-xl pl-4 placeholder-lockplus-placeholderGray font-light font-lockplus text-lockplus-placeholderGray"
                        placeholder="Name of User"
                    />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button 
                        className="bg-lockplus-blue group h-6 w-24 mt-2 relative left-12 top-2 rounded-full focus:outline-none transform hover:scale-105 hover:bg-lockplus-hoverblue transition ease-out duration-100 mt-1.5"
                        onClick={addUser}
                    >
                        Add User
                    </button>
                    <button 
                        className="bg-lockplus-blue group h-6 w-24 mt-2 relative ml-14 top-2 rounded-full focus:outline-none transform hover:scale-105 hover:bg-lockplus-hoverblue transition ease-out duration-100 mt-1.5"
                        onClick={props.toggleFunc}
                    >
                        Cancel
                    </button>
                </ModalFooter>
            </div>
        </Modal>
    );
  }
  export default AddUserModal