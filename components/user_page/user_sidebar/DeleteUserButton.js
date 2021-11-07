import { isPropertySignature } from "typescript";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import { useState } from "react";

function DeleteUserButton(props) {
    const user = props.user
    const click = () => { 
        // var index = 0
        const index = props.userList.indexOf(user)
        props.userList.splice(index, 1)
        for (var i = 0; i < props.userList.length; i++) {
            console.log(props.userList[i])
        }
        console.log("iim mr meseeks")
        // axios
        //   .post('/api/adduser', {
        //     email: input,
        //     sessionEmail: sessionEmail,
        //   })
        //   .catch((err) => console.log(err));
    }
    
    return (
        <button class="text-white hover:text-lockplus-hoverGray" onClick={click}>
          <DeleteIcon/>
        </button>
    );
  }

  export default DeleteUserButton