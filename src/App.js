import React from 'react';
import './App.css';
import Header from './components/header/header';
import Books from './components/books/books';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Books />                 
      </div>
    );
  }  
}

export default App;
