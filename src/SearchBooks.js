import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import { SearchBooksResults } from './SearchBooksResults';


export class SearchBooks extends React.Component {
    state = {
        books: []
    }

    searchForChanged = e => {
        BooksAPI.search(e.target.value)
            .then(books => this.setState({books: books}));
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
                <SearchBooksResults books={this.state.books} onAddBook={this.props.onAddBook} />
            </div>
        );
    }
}
