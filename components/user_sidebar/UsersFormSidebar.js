
function UsersFormSidebar(props) {
    return (
      <div class="sidebar space-y-4 py-10 px-4 bg-gray-700 text-blue-100 w-40 h-screen relative">
        <span class="text-white flex items-center space-x-2 px-4 text-lg font-bold font-lockplus">Users</span>
        {props.children}
      </div>
    );
  }
  export default UsersFormSidebar