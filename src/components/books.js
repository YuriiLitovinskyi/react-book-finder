import React from 'react';
import Search from './search';
import axios from 'axios';

class Books extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      searchField: ''
    }
  }

  searchBook = (e) => {
    e.preventDefault();
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchField)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    
  }

  handleSearch = (event) => {
    this.setState({
      searchField: event.target.value
    })
    //console.log(event.target.value);
  }

  render() {
    return (
      <div>
         <Search handleSearch={this.handleSearch} searchBook={this.searchBook} />
      </div>      
    );
  }  
}

export default Books;