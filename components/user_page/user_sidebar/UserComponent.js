import SingleUserIcon from '../../assets/icons/SingleUserIcon';
import DeleteUserButton from './DeleteUserButton';

function UserComponent(props) {
  const user = props.user
  // const userList = props.userList

  const click = () => {
    props.setSelectedUser(user);
    //props.clickAction();
  }

    return (
      <>
        <span class="inline-flex">
          {/* <div class="text-gray-100 mr-2">
            
          </div> */}
          <button class="hover:text-blue-200 text-gray-100 text-sm font-light font-lockplus flex space-x-2" onClick={click}>
          <SingleUserIcon/>
            <p class="-mt-0.5">
              {user}
            </p>
          </button>
          <div class="absolute left-52 ml-3 -mt-1">
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
