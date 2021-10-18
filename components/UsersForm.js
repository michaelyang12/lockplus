import { useState } from 'react';
import { useRouter } from 'next/router';
import UsersFormSidebar from './user_page/user_sidebar/UsersFormSidebar';
import UserComponent from './user_page/user_sidebar/UserComponent';
import AddUserButton from './user_page/user_sidebar/AddUserButton';
import AddUserModal from './user_page/AddUserModal';

function UsersForm() {
  var usersDisplay = [];
  var users = [];
  var userCount = 5;
  const router = useRouter();

  for (var i = 0; i < userCount; i++) {
    const num = i;
    var user = {
      "username": "user " + (i + 1),
      "function":() => console.log("user " + (num + 1) + " clicked"),
    }
    users.push(user)
    usersDisplay.push(
      <div key={i}>
        <UserComponent clickAction={user.function} username={user.username} />
      </div>);
  }
  
  const foo = () => userCount += 1;
  const refresh = () => router.push('/users');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggle = () => {
      setIsModalOpen(!isModalOpen);
      console.log(isModalOpen);
  }

  return (
      <>
        <div class="relative flex h-screen w-screen text-lockplus-blue justify-start">
          <UsersFormSidebar>
            {usersDisplay}
            <AddUserButton clickAction={toggle}/>
          </UsersFormSidebar>
          <AddUserModal open={isModalOpen} toggleFunc={toggle}/>
        </div>
      </>
    );
}

export default UsersForm;

