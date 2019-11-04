import React from 'react';
//import './header.css';

const BookCard = (props) => {
	return(
		<div className="card-container">
		   <img src={props.image} alt="" />
		   <div>
		      <h2>{props.title}</h2>
		      <h3>{props.author}</h3>
		      <p>{props.published}</p>
		   </div>
		</div>

	)
}

export default BookCard;