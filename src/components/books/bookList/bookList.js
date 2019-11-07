import React from 'react';
import './bookList.css';
import BookCard from './bookCard/bookCard';

const BookList = (props) => {
	if  (props.noMatch === true) {		        
		   		return <div className="noMatch">No Match!</div>
		   	} else {
		   		return(
					<div className="list">
					   {					   	
					   		props.books.map((book, i) => {		   		
					   		return (
					   			<BookCard 
					   		            key={i}
					   		            image={book.volumeInfo.imageLinks === undefined ? "" : book.volumeInfo.imageLinks.thumbnail.replace("http", "https")}
					   		            title={book.volumeInfo.title}
					   		            author={book.volumeInfo.authors}
					   		            published={book.volumeInfo.publishedDate}
					   		            reference={book.volumeInfo.infoLink}
					   		            language={book.volumeInfo.language}
					   		        />
					   		        )	   
					   	}
					  ) 
					   }
					</div>
				)
		   	}
}

export default BookList;

