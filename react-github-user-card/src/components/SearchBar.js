import React from 'react';

class SearchBar extends React.Component{
  constructor(){
    super();
    this.state = {
        user:''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitSearch = e => {
    e.preventDefault();
    this.props.searchUser(this.state.user);
  }

  render(){
    return(
      <form onSubmit={this.submitSearch}>
          <input
            type='text'
            value={this.state.user}
            name='user'
            onChange={this.handleChange}
            placeholder='Search...'
          />
          <button className="search-btn">
            Search
          </button>
        </form>
    );
  }
}

export default SearchBar;