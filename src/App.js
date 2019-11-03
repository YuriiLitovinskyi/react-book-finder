import React from 'react';
import './App.css';
import Header from './components/header';
import Books from './components/books';

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
