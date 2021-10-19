import HomeSidebar from '../components/HomeSidebar';
import LoginForm from '../components/LoginForm';
import UsersForm from '../components/UsersForm';
import { useState } from 'react';
import AddUserModal from '../components/user_page/AddUserModal';

function UsersPage(props) {
  var usersList = [];

  return (
    <>
      <div class="h-screen w-screen bg-lockplus-opacGray">
        <div class="relative flex bg-gray-800 justify-start">
          <div>
            <HomeSidebar/>
          </div>
          <div>
            <UsersForm userlist = {usersList}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default UsersPage;