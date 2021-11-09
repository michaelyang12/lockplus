import { isPropertySignature } from "typescript";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function DeleteUserButton(props) {
    const router = useRouter()
    const user = props.user
    const { data: session, status } = useSession()
    const [sessionEmail, setSessionEmail] = useState('null')

    if (session && sessionEmail === 'null') {
        setSessionEmail(session.user.email)
    }

    const click = () => { 
        const index = props.userList.indexOf(user)
        axios
         .post('/api/deleteuser', {
            email: sessionEmail,
            deleteIndex: index
         })
         .catch((err) => console.log(err))

        console.log(user + ' removed!')
        // props.userList.splice(index, 1)
        router.replace('/users')
    }
    
    return (
        <button class="text-red-500 hover:text-red-700" onClick={click}>
          <DeleteIcon/>
        </button>
    );
  }

  export default DeleteUserButton