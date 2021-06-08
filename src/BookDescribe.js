import  React ,{Component} from 'react';


class Book extends Component{


    render(){
      
      const bookImage = this.props.book.imageLinks && this.props.book.imageLinks.thumbnail ? this.props.book.imageLinks.thumbnail : null;
        return(
            <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 192, backgroundImage:  `url(${bookImage})` }}></div>
              <div className="book-shelf-changer">
                <select   defaultValue={this.props.book.shelf ? this.props.book.shelf :"none" } onChange={event => this.props.updateShelf(this.props.book,event.target.value)}>
                   <option value="currentlyReading">Currently Reading</option>
                   <option value="wantToRead">Want to Read</option>
                   <option value="read">Read</option>
                   <option value="none">None</option>   
                </select>
              </div>
            </div>
            <div className="book-title">{this.props.book.title?this.props.book.title : "No title"}</div>
            <div className="book-authors">{this.props.book.authors ? this.props.book.authors : "unknown author"}</div>
          </div>
        )
    }
}
export default Book;