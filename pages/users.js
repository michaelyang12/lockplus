import HomeSidebar from '../components/HomeSidebar';
import LoginForm from '../components/LoginForm';
import UsersForm from '../components/UsersForm';

function UsersPage(props) {

  return (
    <div class="h-screen w-screen bg-lockplus-opacGray">
      <div class="relative flex bg-gray-800 justify-start">
        <div>
          <HomeSidebar/>
        </div>
        <div>
          <UsersForm/>
        </div>
      </div>
    </div>
  );
}

export default UsersPage;