import React from 'react';
import { Book } from './Book';

export class SearchBooksResults extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        this.props.books.map(b => (
                            <li key={b.id}>
                                <Book book={b}
                                      onUpdateBook={this.props.onUpdateBook} onRemoveBook={this.props.onRemoveBook} />
                            </li>
                        ))
                    }
                </ol>
            </div>
        );
    }
}
