import { useState } from 'react';
import { useRouter } from 'next/router';
import UsersFormSidebar from './user_page/user_sidebar/UsersFormSidebar';
import UserComponent from './user_page/user_sidebar/UserComponent';
import AddUserButton from './user_page/user_sidebar/AddUserButton';
import AddUserModal from './user_page/AddUserModal';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

function UsersForm(props) {
  var usersDisplay = [];
  //var users = [];
  var userCount = props.userlist.length;
  const router = useRouter();

  for (var i = 0; i < userCount; i++) {
    var currentUser = props.userlist[i];
    usersDisplay.push(
      <div key={i}>
        <UserComponent clickAction={currentUser.function} user={currentUser} />
      </div>);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggle = () => {
      setIsModalOpen(!isModalOpen);
  }

  return (
      <>
        <div class="relative flex h-screen w-screen text-lockplus-blue justify-start">
          <UsersFormSidebar>
            {usersDisplay}
            <AddUserButton clickAction={toggle}/>
          </UsersFormSidebar>
        </div>
        <div>
          <AddUserModal open={isModalOpen} toggleFunc={toggle} usersList={props.userlist}/>
        </div>
      </>
    );
}

export default UsersForm;

