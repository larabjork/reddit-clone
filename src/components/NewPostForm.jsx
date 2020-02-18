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
    textAlign: 'center',
    border: '2px solid black',
    backgroundColor: "lightblue",
    width: '300px'

  }
  return (
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
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
onNewPostCreation: PropTypes.func
};

export default NewPostForm;
