import React from 'react';
import PropTypes from 'prop-types';
import { FaGrinHearts } from 'react-icons/fa';
import { v4 } from 'uuid';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      heartCount: 0
    };
    this.increaseHeartCount = this.increaseHeartCount.bind(this);
  }

  increaseHeartCount(event) {
    let newHeartCount = this.state.heartCount + 1
    this.setState({heartCount: newHeartCount});
  }


  render() {
    var postBox = {
      textAlign: 'center',
      border: '2px solid black',
      borderRadius: '5px',
      marginBottom: '20px',
      width: '300px'
    }
    return (
      <div style={postBox}>
      <p>{this.props.body}</p>
      <a><FaGrinHearts onClick={this.increaseHeartCount}/></a><span>{this.state.heartCount}</span>
      </div>
    );
  }
}


Post.propTypes = {
  body: PropTypes.string.isRequired
};

export default Post;
