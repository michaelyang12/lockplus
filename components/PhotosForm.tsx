import React from 'react';
import { AddPhotoButton } from './photos_page/AddPhotoButton';
import axios from 'axios';

export const PhotosForm = (props) => {
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

    const response = await axios.post('/api/photos', formData, config);

    console.log('response', response.data);
  };

  return (
    <AddPhotoButton
      label="Upload Files"
      uploadFileName="theFiles"
      onChange={onChange}
    />
  );
};
