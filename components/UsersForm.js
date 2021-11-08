import { useState } from 'react';
import { useRouter } from 'next/router';
import UsersFormSidebar from './user_page/user_sidebar/UsersFormSidebar';
import UserComponent from './user_page/user_sidebar/UserComponent';
import AddUserButton from './user_page/user_sidebar/AddUserButton';
import AddUserModal from './user_page/AddUserModal';
import { PhotosForm } from './PhotosForm';
import SingleUserPage from './user_page/SingleUserPage';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import DeleteUserButton from './user_page/user_sidebar/DeleteUserButton';
//import axios from 'axios';
//import useSWR from 'swr';

function UsersForm(props) {
  var usersDisplay = [];
  var userCount = props.userlist.length;
  const router = useRouter();
  /*console.log('hi');
  //const url = '/api/users/' + props.sessionEmail;
  const url = 'http://localhost:3000/api/getusers';
  console.log(url);
  const fetcher = () =>
    axios
      .post(url, { email: props.sessionEmail })
      .catch((err) => console.log(err.message))
      .then((res) => res.data.users);
  const { data, error } = useSWR(url, fetcher, {
    initialData: props.userlist,
  });
  if (error) console.log('err in fetcher');
  if (!data) return <div className="bg-transparent"></div>;
  console.log(data); */
  const [selectedUser, setSelectedUser] = useState('');
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
          <AddUserButton clickAction={toggle} />
        </UsersFormSidebar>
      </div>
      <div>
        <SingleUserPage user={selectedUser} />
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
