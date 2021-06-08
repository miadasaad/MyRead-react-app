import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route} from 'react-router-dom';
import Search from './SearchBook';
import HomePage from './HomePage';


class BooksApp extends React.Component {
  
  state = {
    books: []
  }


componentDidMount(){
  BooksAPI.getAll().then(books => {
    this.setState({books : books});
    console.log(books)
  })
}

updateShelf = (book , shelf) => {

  BooksAPI.update(book,shelf).then(res => {

    book.shelf = shelf;
    if(shelf === "none") {
      this.setState(prevState => ({ 
        books: this.state.books.filter(bk => book.id !== bk.id)
      }))
      
    } 
    else {    
      book.shelf = shelf
      let updatedbook = this.state.books.filter(bk => book.id !== bk.id)
      updatedbook.push(book)
      this.setState(prevState => ({ 
        books: updatedbook
      }))
      
    }
   
  })
}


  render() {
    return (

      <div className="app">
         
            <Route exact path='/' render={() =>
             <HomePage books={this.state.books} updateShelf={this.updateShelf} />
            }/> 
        
           <Route  path='/search' render={() => 
            <Search books={this.state.books} updateShelf={this.updateShelf} />
           } />

      </div>

        )    
  }
}

export default BooksApp
