import React, { Component } from 'react';
import Shelf from './Shelf';
import { Link } from 'react-router-dom';

class HomePage extends Component{

    render(){
      const{books, updateShelf} = this.props;
        return (
            <div className="list-books">

            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <Shelf books={books} updateShelf={updateShelf} />
           
            <div className="open-search">
              <Link className='link' to='/search' >Add a book</Link>
            </div>

            </div>
        )
    }
}
export default HomePage