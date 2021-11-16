function UploadedUserImages(props) {
  var visibility = props.isUserSelected ? 'visible' : 'invisible';
  return (
    <>
      <div className={`w-48 h-48 border-4 border-black ${visibility}`}></div>
    </>
  );
}

export default UploadedUserImages;
