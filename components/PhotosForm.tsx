import React, { useState } from 'react';
import { AddPhotoButton } from './photos_page/AddPhotoButton';
import { useSession } from 'next-auth/react';
import sanitize from '../util/sanitize';
import slugify from 'slugify';
import axios from 'axios';

/*
interface Response {
  status: boolean;
  message: string;
  statusText: string;
  code: any;
}
*/

export const PhotosForm = (props) => {
  const { data: session, status } = useSession();
  const safeUser: string = slugify(props.user, {
    remove: /"<>#%\{\}\|\\\^~\[\]`;\?:@=&/g,
  });
  console.log('user');
  console.log(safeUser);
  //console.log('session');
  //console.log(session);
  //const data = { formData };
  const [sessionEmail, setSessionEmail] = useState('null');
  if (session && sessionEmail === 'null') {
    setSessionEmail(session.user.email);
  }
  const onChange = async (formData) => {
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        console.log(
          `Current progress:`,
          Math.round((event.loaded * 100) / event.total)
        );
      },
    };

    //
    //let resData: Response;
    //let code: string;
    const codeResponse: any = await axios
      .post('/api/codefromemail', {
        email: sessionEmail,
      })
      .catch((err) => {
        console.log(err);
      });
    /*try {
      console.log('code');
      code = codeResponse.data.code;
      console.log(code);
    } catch (e) {
      console.log('code response err');
      console.log(codeResponse);
      console.log('err');
      console.log(e);
    }*/
    console.log('code');
    const code: string = codeResponse.data.code;
    console.log(code);
    const apiUrl: string = '/api/photos/' + code + '/' + safeUser;
    const response = await axios.post(apiUrl, formData, config);

    //console.log('response', response.data);
  };

  return (
    <>
      {/* <div className="relative flex container h-screen w-screen p-4 visible text-lockplus-blue">
        PHOTOS
      </div> */}
      <AddPhotoButton
        label="Upload Photos"
        uploadFileName="theFiles"
        onChange={onChange}
      />
    </>
  );
};
