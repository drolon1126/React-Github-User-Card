import React from 'react';
import './App.css';

import Search from './components/Search';
import UserData from './components/UserData';
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      searchList: [],
      search: '',
      userName: '',
      userData: {},
      followerList: []
    }
  }
  searchUser = (username) => {
    this.setState({
      search: username
    })
  }
  selectUser = (username) => {
    this.setState({
      userName: username
    })
  }
  
  componentDidUpdate(prevProps,prevState){
    if(prevState.search != this.state.search){
      fetch(`https://api.github.com/search/users?q=${this.state.search}`)
      .then(res=>res.json())
      .then(userL=>this.setState({searchList: userL.items}))
      .catch(err => console.log('oops: ', err));
    }
    if(prevState.userName != this.state.userName){
      fetch(`https://api.github.com/users/${this.state.userName}`)
      .then(res=>res.json())
      .then(user=>this.setState({userData: user}))
      .catch(err => console.log('oops: ', err));

    fetch(`https://api.github.com/users/${this.state.userName}/followers`)
      .then(res=>res.json())
      .then(followList=>this.setState({followerList: followList}))
      .catch(err => console.log('oops: ', err));
    }
  }
  render(){
    return(
      <>
        <Route exact path='/' render={(props) => <Search {...props} searchUser={this.searchUser} selectUser={this.selectUser} searchList={this.state.searchList}/> } />
        <Route path='/users/:id' render={(props) => <UserData {...props} user={this.state.userData} followerList={this.state.followerList} />} />
      </>
    );
  }
  /*render(){
    var display;
    if(this.state.userName===''){
      display =
        <> 
          <div>
            <SearchBar searchUser={this.searchUser}/>
          </div>
          <div>
            <h1>Search Results</h1>
            <SearchList searchList={this.state.searchList} selectUser={this.selectUser}/>
          </div>
        </>;
    } else {
      display =
      <>
        <UserData user={this.state.userData} followerList={this.state.followerList} clearUser={this.clearUser}/>
      </>
    }
    return(
      <>
      {display}
      </>
      
    );
  }*/
}

export default App;
