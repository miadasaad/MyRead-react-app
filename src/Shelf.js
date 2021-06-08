import React, {Component} from 'react';
import Book from './BookDescribe';

class Shelf extends Component {
    
    render(){  
      
      return(
        <div className="list-books-content">
             <div>
               <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                   <ol className="books-grid">
                   {this.props.books.filter(book => book.shelf === "currentlyReading").map(book => (
                          <li key={book.id}>
                            <Book updateShelf={this.props.updateShelf} book={book} books={this.props.books} />
                          </li>
                        ))} 
                  </ol>
                 </div>
               </div>

               <div className="bookshelf">
                 <h2 className="bookshelf-title">Want to Read</h2>
                   <div className="bookshelf-books">
                      <ol className="books-grid">
                        {this.props.books.filter(book => book.shelf === "wantToRead").map(book => (
                          <li key={book.id}>
                            <Book updateShelf={this.props.updateShelf} book={book} books={this.props.books}/>
                          </li>
                        ))}
                       </ol>
                    </div>
                 </div>
               <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {this.props.books.filter(book => book.shelf === "read").map(book => (
                          <li key={book.id}><Book updateShelf={this.props.updateShelf} book={book} books={this.props.books}/></li>
                        ))}
                      </ol>
                   </div>
                </div>

              </div>
        </div>
      )
    }
}
export default Shelf