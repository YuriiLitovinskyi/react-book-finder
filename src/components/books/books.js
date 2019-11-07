import React from 'react';
import Search from './search/search';
import BookList from './bookList/bookList';
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

  //Search pressing Enter on keyboard 
  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      //console.log('Enter key was pressed...');
    }
  }

  //Get books data from Google APIs
  searchBook = (e) => {
    e.preventDefault();
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchField)
      .then((response) => {
        //console.log(response);
        this.setState({
          books: [...response.data.items],
          totalItems: response.data.totalItems,
          noMatch: false
        }, () => {
          //console.log(this.state.books);
          //console.log(this.state.totalItems);
        })
      })
      .catch((error) => {
        console.log(error);
        if (error instanceof TypeError) {
          //console.log("No match!");
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

  // imageDataHandling = () => {
  //   if ( this.state.books.volumeInfo.imageLinks === undefined ) {
  //     return ""
  //   } else {
  //     return this.state.books.volumeInfo.imageLinks.thumbnail
  //   }   
  // } 

  render() {
    return (
      <div>
         <Search handleSearch={this.handleSearch} searchBook={this.searchBook} _handleKeyDown={this._handleKeyDown} />
         <BookList  books={this.state.books} noMatch={this.state.noMatch} />
      </div>      
    );
  }  
}

export default Books;