import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPostForm(props){
  let _title = null;
  let _body = null;

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({title: _title.value, body: _body.value, id: v4()});
    _title.value = '';
    _body.value = '';
  }

  const formStyle = {
    paddingTop: '50px',
    textAlign: 'center',
    height: '500px'
  }
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
     const [file] = e.target.files;
     if (file) {
       const reader = new FileReader();
       const {current} = uploadedImage;
       current.file = file;
       reader.onload = (e) => {
           current.src = e.target.result;
       }
       reader.readAsDataURL(file);
     }
   };

  return (
    <div>
    <div>
      <form style={formStyle} onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Post Title'
          ref={(input) => {_title = input;}}/>
        <br></br>
        <br></br>
        <textarea
          id='body'
          placeholder='Your Post goes here.'
          ref={(textarea) => {_body = textarea;}}/>
          <br></br>
        <button type='submit'>Post it!</button>
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none"
        }}
      />
      <div
        style={{
          height: "60px",
          width: "60px",
          border: "1px dashed black"
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          style={{
            width: "20%",
            height: "20%",
            position: "absolute"
          }}
        />
      </div>
      Click to upload Image

    </div>
    </form>
    </div>
    </div>
  );
}

NewPostForm.propTypes = {
onNewPostCreation: PropTypes.func
};

export default NewPostForm;
