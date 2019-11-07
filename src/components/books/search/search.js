import React from 'react';
import './search.css';

const Search = (props) => {
	return(	
    <form onSubmit={props.searchBook}>	
  		<div className="input-group input-group-lg input-for-book">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg">Enter Book Name</span>
        </div>
        <input
             onChange={props.handleSearch} 
             type="text" 
             className="form-control" 
             required
             onKeyDown={props._handleKeyDown}
             aria-label="Sizing example input" 
             aria-describedby="inputGroup-sizing-lg" 
             />
        <button                   
              type="submit" 
              className="btn btn-info btn-search"
              >Search
              </button>
      </div>	
    </form>	
	)
}

export default Search;