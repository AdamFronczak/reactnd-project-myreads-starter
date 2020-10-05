import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBooksResults } from './SearchBooksResults';


export class SearchBooks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" />
                    </div>
                </div>
                <SearchBooksResults />
            </div>
        );
    }
}
