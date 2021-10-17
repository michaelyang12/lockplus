import { useState } from 'react';
import { useRouter } from 'next/router';
import HomeSidebar from './HomeSidebar';
import UsersFormSidebar from './user_sidebar/UsersFormSidebar';
import UserComponent from './user_sidebar/UserComponent';

function UsersForm() {
  var users = [];
  var userFunc = [];

  for (var i = 0; i < 4/*this.props.userCount*/; i++) {
    const foo = () => console.log("user" + i + " clicked");
    userFunc.push(foo)
    users.push(
      <div key={i}>
        <UserComponent clickAction={userFunc[i]} username={"user" + i} />
      </div>);
  }
  
  return (
      <div class= "relative flex container box-border h-screen w-screen text-lockplus-blue">
        <UsersFormSidebar>
          {users}
        </UsersFormSidebar>
      </div>
    );
}

export default UsersForm;

