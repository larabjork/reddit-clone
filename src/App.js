import React from 'react';
import Home from './components/Home';
import Header from "./components/Header";
import PostList from "./components/PostList";
import Post from "./components/Post";
import NewPostForm from "./components/NewPostForm";
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
  }

  handleAddingNewPostToList(newPost){
    var newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }

  render(){
    return (
      <div>
      <Header/>
      <div className="container">
      <h1>Post</h1>
      <Switch>
      <Route exact path='/' render={()=><PostList postList={this.state.masterPostList} />}  />
      <Route path='/newpost' render={()=><NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />}  />
      </Switch>
      </div>
      </div>
    );
  }
}

export default App;
