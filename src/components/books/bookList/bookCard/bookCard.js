import React from 'react';
import './bookCard.css';
import noImage from './no_image_available.png';

const BookCard = (props) => {
	return(			
		<div className="card">
			<a href={props.reference} target="_blank" rel="noopener noreferrer">
			  <img src={props.image === "" ? noImage : props.image} className="card-img-top" alt="Book" />
			</a>			
			  <div className="card-body">
			    <hr />
			    <h5 className="card-title">{props.title}</h5>
			    <h6 className="card-text">{props.author}</h6>
			    <h6 className="card-text">{props.published}</h6>
			    <h6 className="card-text">Language: {props.language}</h6>			    		    
			  </div>
		</div>	
	)
}

export default BookCard;