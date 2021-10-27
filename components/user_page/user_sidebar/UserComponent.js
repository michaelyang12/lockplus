import SingleUserIcon from '../../assets/icons/SingleUserIcon';

function UserComponent(props) {
  const user = props.user;

  return (
    <a
      href="#"
      class="hover:text-lockplus-hoverGray text-white flex items-center space-x-2 px-4"
      onClick={props.clickAction}>
      <SingleUserIcon />
      <span class="text-sm font-md font-lockplus">{user}</span>
    </a>
  );
}

export default UserComponent;
