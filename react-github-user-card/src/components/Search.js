import React from 'react';
import SearchBar from './SearchBar';
import SearchList from './SearchList';

class Search extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
    <>
    <div>
            <SearchBar searchUser={this.props.searchUser}/>
          </div>
          <div>
            <h1>Search Results</h1>
            <SearchList searchList={this.props.searchList} selectUser={this.props.selectUser}/>
          </div>
    </>
    );
  }
}

export default Search;