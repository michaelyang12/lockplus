import { Button } from 'reactstrap';
import { useState } from 'react';
import { PhotosForm } from '../PhotosForm';

function SingleUserPage(props) {
  const test = props.user;
  // const [isUserSelected, setIsUserSelected] = useState(false)

  // if (test) {
  //     setIsUserSelected(true)
  // }

  const header = (test + '').length == 0 ? 'No user selected' : test;

  return (
    <div className="relative flex h-full w-full bg-gray-800 container text-white p-4">
      <div className="block w-auto h-48 m-4">
        <div className="h-24 w-screen">
          <div className="text-2xl font-bold font-lockplus text-left pr-4 hover:text-lockplus-hoverblue">
            {header}
          </div>
          <div className="text-md font-regular font-lockplus relative text-left mt-8 mr-12 justify-start">
            Upload a Photo of Your Face
            <div className="relative h-6 w-24 relative ml-8 mt-1.5">
              <PhotosForm user={props.user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleUserPage;
