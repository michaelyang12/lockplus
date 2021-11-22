import React, { useState } from 'react';

function UploadedUserImages(props) {
  var visibility = props.isUserSelected ? 'visible' : 'invisible';
  const image = props.image;
  console.log(image);
  const [bufferConv, setBufferConv] = useState('');
  if (bufferConv === '') {
    setBufferConv(btoa(String.fromCharCode.apply(null, image.img.data.data)));
  }
  /*
  setBufferConv(
    bufferConv === ''
      ? btoa(String.fromCharCode.apply(null, image.img.data.data))
      : bufferConv
  );*/
  var dataimg = `data:${image.img.contentType};base64,` + bufferConv;
  return (
    <>
      <div className="h-full w-full object-contain">
        <img src={dataimg} alt="something went wrong" />
      </div>
    </>
  );
}

export default UploadedUserImages;
