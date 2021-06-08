import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Book from './BookDescribe'
import * as BooksAPI from './BooksAPI'


class Search extends Component{
  state ={
    searchedBooks: []  
  }
  search = (query) => {
    if (query.length !== 0) {
      BooksAPI.search(query).then((books) => {

        if(books.length>0) { 
         // this.setState({searchedBooks: books })
          books.forEach(book => 
            this.props.books.forEach(bk => {
              if(book.id === bk.id){
                book.shelf=bk.shelf
                console.log(bk.shelf)
                console.log(book.shelf)
              }
            })
           
        )
        this.setState(prevState => ({searchedBooks: books }))
        console.log(this.state.searchedBooks)
        }
        else{
          this.setState({ searchedBooks: []});
        }  
         
      })
  }
  else {
     this.setState({searchedBooks: []})
  }
}
    render(){
        
        return(

            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
              
                <input type="text" placeholder="Search by title or author" onChange={(event) => this.search(event.target.value)} />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">   
              {this.state.searchedBooks.length > 0 ? 
              this.state.searchedBooks.map(book => (
                  <li key={book.id}>
                    <Book book={book}  updateShelf={this.props.updateShelf} />
                  </li>    
              ))
              
            :<li></li>
              }
                  
              </ol>
            </div>
          </div>
        )
    }
}
export default Search;