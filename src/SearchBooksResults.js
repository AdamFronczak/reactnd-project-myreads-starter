import React from 'react';
import { Book } from './Book';

export class SearchBooksResults extends React.Component {
    render() {
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        this.props.books.map(b => (
                            <li key={b.id}>
                                <Book book={b}
                                      onAddOrUpdateBook={this.props.onAddOrUpdateBook} onRemoveBook={this.props.onRemoveBook} />
                            </li>
                        ))
                    }
                </ol>
            </div>
        );
    }
}
