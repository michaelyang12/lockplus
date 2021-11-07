import SingleUserIcon from '../../assets/icons/SingleUserIcon';
import DeleteUserButton from './DeleteUserButton';

function UserComponent(props) {
  const user = props.user;
  // const userList = props.userList

  const click = () => {
    props.setSelectedUser(user);
    //props.clickAction();
  }

    return (
      <>
        <span class="inline-flex">
          <div class="text-white mr-2">
            <SingleUserIcon/>
          </div>
          <button class="hover:text-lockplus-hoverGray text-white text-sm font-light font-lockplus flex space-x-2" onClick={click}>
            <p class="ml-0.5 -mt-0.5">
              {user}
            </p>
          </button>
          <div class="ml-2 -mt-0.5">
            <DeleteUserButton 
              user={user}
              userList={props.userList}
            />
          </div>
        </span>

      </>
    );
  }

export default UserComponent;
