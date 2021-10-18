import { useState } from 'react';
import { useRouter } from 'next/router';
import HomeSidebar from './HomeSidebar';
import UsersFormSidebar from './user_sidebar/UsersFormSidebar';
import UserComponent from './user_sidebar/UserComponent';
import AddUserIcon from './assets/icons/AddUserIcon';
import AddUserButton from './user_sidebar/AddUserButton';

function UsersForm() {
  var usersDisplay = [];
  var users = [];
  var userCount = 5;
  const router = useRouter();

  for (var i = 0; i < userCount/*this.props.userCount*/; i++) {
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
  const addUser = () => {userCount += 1; router.reload('/users');} 

  return (
      <div class= "relative flex container box-border h-screen w-screen text-lockplus-blue">
        <UsersFormSidebar>
          {usersDisplay}
          <AddUserButton clickAction={addUser}/>
        </UsersFormSidebar>
      </div>
    );
}

export default UsersForm;

