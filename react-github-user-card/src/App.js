import React from 'react';
import UserCard from './components/UserCard';
import './App.css';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userData: {},
      followerList: []
    }
  }
  componentDidMount(){
    fetch('https://api.github.com/users/drolon1126')
      .then(res=>res.json())
      .then(user=>this.setState({userData: user}))
      .catch(err => console.log('oops: ', err));

    fetch(`https://api.github.com/users/drolon1126/followers`)
      .then(res=>res.json())
      .then(followList=>this.setState({followerList: followList}))
      .catch(err => console.log('oops: ', err));
      
  }
  render(){
    return(
      <>
      <div>
        <h1>The Current User</h1>
        <UserCard user={this.state.userData} />
      </div>
      <div>
        <h2>List of Followers</h2>
        <FollowerList followerList={this.state.followerList} />
      </div>
      </>
    );
  }
}

export default App;
