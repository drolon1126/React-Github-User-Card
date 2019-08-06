import React from 'react';
import UserCard from './UserCard';
import Grid from '@material-ui/core/Grid';

class FollowerList extends React.Component {
  constructor(){
    super();
  }
  render(){
    return(
      <Grid container spacing={3}>
        {this.props.followerList.map(user=>{
          return(
            <Grid item>
              <UserCard user={user} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default FollowerList;