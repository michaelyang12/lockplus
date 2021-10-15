import UsersIcon from "../assets/icons/UsersIcon";
import { useRouter } from 'next/router';

function UsersBar(props) {
    const router = useRouter();
    return (
        <a href="#" class="text-white flex items-center space-x-2 px-4 ml-1 hover:text-lockplus-hoverGray"
         onClick = {() => router.push('/users')}>
          <UsersIcon />
          <span class="text-lg font-bold font-lockplus">
              users
            </span>
        </a>
    );
}

export default UsersBar;