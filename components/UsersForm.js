import { useState } from 'react';
import { useRouter } from 'next/router';
import UsersFormSidebar from './user_page/user_sidebar/UsersFormSidebar';
import UserComponent from './user_page/user_sidebar/UserComponent';
import AddUserButton from './user_page/user_sidebar/AddUserButton';
import AddUserModal from './user_page/AddUserModal';
import { PhotosForm } from './PhotosForm';
import SingleUserPage from './user_page/SingleUserPage';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import DeleteUserButton from './user_page/user_sidebar/DeleteUserButton';

function UsersForm(props) {
  var usersDisplay = [];
  //var users = [];
  const userList = props.userlist
  const userCount = userList.length
  const router = useRouter();
  const primaryUser = props.userlist[0] 
    ? props.userlist[0]
    : ""

  // const nullUser = {
  //   username: "No user selected",
  //   function: undefined,
  // };

  const [selectedUser, setSelectedUser] = useState(primaryUser);

  for (var i = 0; i < userCount; i++) {
    var currentUser = props.userlist[i];
    usersDisplay.push(
      <div key={i}>
        <UserComponent
          clickAction={currentUser.function}
          user={currentUser}
          userList={props.userlist}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      </div>
    );
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div class="relative flex justify-start">
      <div>
        <UsersFormSidebar>
          {usersDisplay.map((user) => (
            <div>{user}</div>
          ))}
          <div/>
          <AddUserButton clickAction={toggle} />
        </UsersFormSidebar>
      </div>
      <div>
        <SingleUserPage 
          user={selectedUser}
        />
      </div>
      <div>
        <AddUserModal
          open={isModalOpen}
          toggleFunc={toggle}
          usersList={props.userlist}
        />
      </div>
    </div>
  );
}

export default UsersForm;