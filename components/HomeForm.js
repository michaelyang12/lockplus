function HomeForm(props) {
    const userEmail = props.userEmail
    return (
        <div class="relative container h-screen w-screen p-4 bg-gray-800 visible text-white">
            <div class="text-xl">
                Welcome {userEmail}!
            </div>
            <div class="text-md mt-12">
                Navigate to the "Users" page to manage your existing users. 
            </div>
            <div class="text-md">
                Upload photos for each user to add them to your lock. 
            </div>
        </div>
    );
  }
  export default HomeForm;