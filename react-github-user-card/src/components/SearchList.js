import React from 'react';
import UserCard from './UserCard';
import Grid from '@material-ui/core/Grid';

class SearchList extends React.Component {
  constructor(){
    super();
  }
  render(){
    return(
      <Grid container spacing={3}>
        {this.props.searchList.map(user=>{
          return(
            <Grid item>
              <UserCard user={user} type='search' selectUser={this.props.selectUser}/>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default SearchList;