import React from 'react';
import './search.css';

const Search = (props) => {
	return(		
		<div className="input-group input-group-lg input-for-book">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-lg">Enter Book Name</span>
            </div>
            <input
                 onChange={props.handleSearch} 
                 type="text" 
                 className="form-control" 
                 aria-label="Sizing example input" 
                 aria-describedby="inputGroup-sizing-lg" />
            <button 
                  type="button" 
                  className="btn btn-info btn-search"
                  >Search</button>
          </div>		
	)
}

export default Search;