import { Button } from 'reactstrap';
import { useState } from 'react';
import { PhotosForm } from '../PhotosForm';
import UploadPhotoPrompt from './UploadPhotoPrompt';
import UploadedUserImages from './UploadedUserImages';

function SingleUserPage(props) {
  const user = props.user;
  const header = (user + '').length == 0 ? 'No user selected' : user;

  // const [isUserSelected, setIsUserSelected] = useState(false)
  var isUserSelected = false;

  if (header == user) {
    isUserSelected = true;
  } else {
    isUserSelected = false;
  }
  // } else {
  //   setIsUserSelected(false)
  // }

  return (
    <div className="relative flex h-full w-full bg-gray-800 container text-white p-4">
      <div className="block w-auto h-48 m-4">
        <div className="h-24 w-screen">
          <div className="text-2xl font-bold font-lockplus text-left pr-4 text-white">
            User: <span class="text-lockplus-blue inline-flex"> {header} </span>
          </div>
          <UploadPhotoPrompt
            user={props.user}
            isUserSelected={isUserSelected}
          />
          <UploadedUserImages
            user={props.user}
            isUserSelected={isUserSelected}
          />
        </div>
      </div>
    </div>
  );
}

export default SingleUserPage;
