import React from 'react';
import { BookShelfChanger } from './BookShelfChanger';


export class Book extends React.Component {
    changeShelf = shelf => {
        var book = { ...this.props.book }
        book.shelf = shelf;
        
        if (shelf === "none") {
            this.props.onRemoveBook(book);
        }
        else {
            this.props.onAddOrUpdateBook(book);
        }
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail}")`
                    }}></div>
                    <BookShelfChanger currentShelf={this.props.book.shelf || "none"} onSelect={this.changeShelf} />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors && this.props.book.authors.join(", ")}</div>
            </div>
        );
    }
}
