
function UsersFormSidebar(props) {
    return (
      <div class="sidebar space-y-4 py-4 px-4 bg-gray-700 text-blue-100 w-60 h-screen">
        <span class="relative flex text-white items-center mt-4 space-x-2 px-4 text-lg font-light font-lockplus">
          Users
        </span>
        <span class="relative flex items-center -mt-4 text-gray-500 font-light top-1 font-serif">
        _____________________
        </span>
        {props.children}
      </div>
    );
  }
  export default UsersFormSidebar