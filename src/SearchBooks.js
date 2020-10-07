import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import { SearchBooksResults } from './SearchBooksResults';


export class SearchBooks extends React.Component {
    state = {
        foundBooks: []
    }

    searchForChanged = e => {
        BooksAPI.search(e.target.value)
            .then(books => {
                if (books && !books.error) {
                    books = books.map(b => {
                        const matchedBooksOnShelf = this.props.books.filter(x => x.id === b.id);
                        if (matchedBooksOnShelf.length > 0) {
                            return matchedBooksOnShelf[0];
                        }

                        return b;
                    });
                    this.setState({foundBooks: books});
                }
                else {
                    this.setState({foundBooks: []});
                }
            });
    }

    addBook = addedBook => {
        this.setState(currentState => {
            const newBooks = currentState.foundBooks.map(b => b.id === addedBook.id ? addedBook : b);
            return {foundBooks: newBooks};
        });
        this.props.onAddOrUpdateBook(addedBook);
    }

    removeBook = removedBook => {
        this.setState(currentState => {
            const newBooks = currentState.foundBooks.map(b => b.id === removedBook.id ? removedBook : b);
            return {foundBooks: newBooks};
        });
        this.props.onRemoveBook(removedBook);
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.searchFor} 
                               onChange={this.searchForChanged} />
                    </div>
                </div>
                <SearchBooksResults books={this.state.foundBooks} onAddOrUpdateBook={this.addBook} onRemoveBook={this.removeBook} />
            </div>
        );
    }
}
