import HomeSidebar from '../components/HomeSidebar';
import LoginForm from '../components/LoginForm';
import UsersForm from '../components/UsersForm';
import { useState } from 'react';
import AddUserModal from '../components/user_page/AddUserModal';
import axios from 'axios';

function UsersPage(props) {
  const usersList = [];
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

/*export async function getServerSideProps(context) {
  //const [session] = getSession();
  //const param = session.data.email;
  let parent;
  let children;
  let users;
  await axios
    .post('/api/getusers', { email: 'test@test.com' })
    .catch((err) => {
      console.log(err);
    })
    .then((response) => {
      console.log('response');
      //console.log(response.data);
      parent = response.root_user;
      children = response.children_users;
      users = children.unshift(parent);
      //console.log(response);
      //console.log(users);
    });
  return {
    props: {
      userList: users,
    },
  };
} */
