import AddUserIcon from "../../assets/icons/AddUserIcon";

function AddUserButton(props) {
    return (
      <button 
        type="button"
        onClick={props.clickAction}
      >
        <span href="#" class="hover:text-blue-200 text-gray-100 -ml-4 flex items-center space-x-2 px-4">
          <AddUserIcon/>
          <span class="text-xs font-lockplus">Add User</span>
        </span>
      </button>

    );
  }

  export default AddUserButton