import { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { useSession } from 'next-auth/react';
import axios from 'axios';

function AddUserModal(props) {
  const [input, setInput] = useState('');
  const [userExists, setDoesUserExist] = useState(false);
  const { data: session, status } = useSession();
  //console.log('session');
  //console.log(session);
  const [sessionEmail, setSessionEmail] = useState('null');
  if (session && sessionEmail === 'null') {
    setSessionEmail(session.user.email);
  }
  const addUser = () => {
    if (input.length > 0) {
      for (var i = 0; i < props.usersList.length; i++) {
        if (props.usersList[i].username == input) {
          setDoesUserExist(true);
          break;
        } else {
          setDoesUserExist(false);
        }
      }
      if (!userExists) {
        axios
          .post('/api/adduser', {
            //email: 'test@test.com',
            //newUser: input,
            email: input,
            sessionEmail: sessionEmail,
          })
          .catch((err) => console.log(err));
        console.log(input + ' Added!');
        /*var user = {
          username: input,
          function: () => console.log(input + ' clicked!'),
        };*/
        var user = input;
        props.usersList.push(user);
        setInput("");
        props.toggleFunc();
      } else {
        alert('User/Name already exists!');
      }
    }
  };

  const cancel = () => {
      setInput("");
      props.toggleFunc();
  }

  return (
    <Modal
      isOpen={props.open}
      toggle={props.toggleFunc}
      modalClassName="relative h-screen w-screen bg-gray-800 text-white justify-items-center p-4">
      <div>
        <ModalHeader toggle={props.toggleFunc}> </ModalHeader>
        <ModalBody>
          <div className="relative text-xl font-bold font-lockplus mt-2 text-center text-lockplus-blue pr-4 ml-20 hover:text-lockplus-hoverblue">
            Add a user
          </div>
          <div className="relative left-96">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="relative h-8 w-48 bg-lockplus-opacGray left-64 bg-opacity-50 mt-4 focus: outline-none border-2 border-lockplus-blue rounded-xl pl-4 placeholder-lockplus-placeholderGray font-light font-lockplus text-lockplus-placeholderGray"
              placeholder="New user name"
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="bg-lockplus-blue group h-6 w-24 mt-2 relative left-96 ml-64 top-2 rounded-full focus:outline-none transform hover:scale-105 hover:bg-lockplus-hoverblue transition ease-out duration-100 mt-1.5"
            onClick={addUser}>
            Add User
          </button>
          <button
            className="bg-lockplus-blue group h-6 w-24 mt-2 relative left-96 ml-2 top-2 rounded-full focus:outline-none transform hover:scale-105 hover:bg-lockplus-hoverblue transition ease-out duration-100 mt-1.5"
            onClick={cancel}>
            Cancel
          </button>
        </ModalFooter>
      </div>
    </Modal>
  );
}
export default AddUserModal;
