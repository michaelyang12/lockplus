import HomeSidebar from '../components/HomeSidebar';
import LoginForm from '../components/LoginForm';
import UsersForm from '../components/UsersForm';
import React, { Component, useState } from 'react';
import AddUserModal from '../components/user_page/AddUserModal';
import axios from 'axios';
import { getSession } from 'next-auth/react';

function UsersPage(props) {
  const usersList = props.userList;
  console.log(usersList);

  return (
    <>
      <div class="h-screen w-screen bg-lockplus-opacGray">
        <div class="relative flex bg-gray-800 justify-start">
          <div>
            <HomeSidebar />
          </div>
          <div>
            <UsersForm userlist={usersList} />
          </div>
        </div>
      </div>
    </>
  );
}

export default UsersPage;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let param = 'nulled';
  if (session) {
    param = session.user.email;
  }
  console.log('param' + param);
  let users = [];
  await axios
    .post('http://localhost:3000/api/getusers', { email: param })
    .catch((err) => {
      console.log('err getusers from client');
      console.log(err.message);
    })
    .then((response) => {
      if (response) {
        users = response.data.users;
        console.log('success');
        console.log(users);
      }
    });
  return {
    props: {
      userList: users,
    },
  };
}
