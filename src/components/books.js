import React from 'react';
import Search from './search';
import BookList from './bookList';
import axios from 'axios';

class Books extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],     
      searchField: '',
      noMatch: false
    }
  }

  searchBook = (e) => {
    e.preventDefault();
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchField)
      .then((response) => {
        console.log(response);
        this.setState({
          books: [...response.data.items],
          totalItems: response.data.totalItems,
          noMatch: false
        }, () => {
          console.log(this.state.books);
          console.log(this.state.totalItems);
        })
      })
      .catch((error) => {
        console.log(error);
        if (error instanceof TypeError) {
          console.log("No match!");
          this.setState({
            noMatch: true
          })       
        }
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
         <BookList  books={this.state.books} noMatch={this.state.noMatch}/>
      </div>      
    );
  }  
}

export default Books;