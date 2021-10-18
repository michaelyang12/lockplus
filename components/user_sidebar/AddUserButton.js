import SingleUserIcon from "../assets/icons/SingleUserIcon";
import AddUserIcon from "../assets/icons/AddUserIcon";

function AddUserButton(props) {
    return (
      <a href="#" class="hover:text-lockplus-hoverGray text-white flex items-center space-x-2 px-4" onClick={props.clickAction}>
        <AddUserIcon/>
        <span class="text-xs font-lockplus">Add User</span>
      </a>
    );
  }

  export default AddUserButton