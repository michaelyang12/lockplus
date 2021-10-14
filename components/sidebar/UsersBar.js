import UsersIcon from "../../.next/assets/icons/UsersIcon";

function UsersBar(props) {
    return (
        <a href="#" class="text-white flex items-center space-x-2 px-4 ml-1 hover:text-lockplus-hoverGray">
          <UsersIcon />
          <span class="text-lg font-bold font-lockplus">
              users
            </span>
        </a>
    );
}

export default UsersBar;