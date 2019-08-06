import React from 'react';
import UserCard from './UserCard';
import FollowerList from './FollowerList';
import { Link } from 'react-router-dom';

class UserData extends React.Component {
  constructor(){
    super();
  }
  render(){
    return(
      <>
        <div>
          <h1>The Current User</h1>
          <UserCard user={this.props.user} type='user' />
          <Link onClick={this.props.clearUser} to='/'>Back to Search</Link>
        </div>
        <div>
          <h2>List of Followers</h2>
          <FollowerList followerList={this.props.followerList} />
        </div>
      </>
    );
  }
}

export default UserData;