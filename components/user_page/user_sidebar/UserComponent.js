import SingleUserIcon from '../../assets/icons/SingleUserIcon';

function UserComponent(props) {
  const user = props.user;

  const click = () => {
    props.setSelectedUser(user);
    //props.clickAction();
  }

    return (
      <a href="#" class="hover:text-lockplus-hoverGray text-white flex items-center space-x-2 px-4" onClick={click}>
        <SingleUserIcon/>
        <span class="text-sm font-bold font-lockplus">{user}</span>
      </a>
    );
  }

export default UserComponent;
