function HomeForm(props) {
    let userEmail = props.user
    return (
      <div class="relative flex container h-screen w-screen p-4 bg-gray-800 visible text-lockplus-blue">
        Welcome {userEmail}!
      </div>
    );
  }
  export default HomeForm;