import DeleteIcon from "../../assets/icons/AddUserIcon";

function DeleteUserButton(props) {
    function click() {
        //test
    }

    return (
      <button 
        type="button"
        onClick={click}
      >
        <a href="#" class="hover:red">
          <DeleteIcon/>
        </a>
      </button>

    );
  }

  export default DeleteUserButton