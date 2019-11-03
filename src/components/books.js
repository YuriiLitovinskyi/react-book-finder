import React from 'react';
import Search from './search';

class Books extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      searchField: ''
    }
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
         <Search handleSearch={this.handleSearch}/>
      </div>      
    );
  }  
}

export default Books;