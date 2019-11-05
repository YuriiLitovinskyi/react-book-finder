import React from 'react';
import './bookList.css';
import BookCard from './bookCard';

const BookList = (props) => {
	return(
		<div className="list">
		   {
		   	props.books.map((book, i) => {
		   		return <BookCard 
		   		            key={i}
		   		            image={book.volumeInfo.imageLinks.thumbnail}
		   		            title={book.volumeInfo.title}
		   		            author={book.volumeInfo.authors}
		   		            published={book.volumeInfo.publishedDate}
		   		            reference={book.volumeInfo.infoLink}
		   		            language={book.volumeInfo.language}
		   		        />
		   	}) 
		   }
		</div>

	)
}

export default BookList;