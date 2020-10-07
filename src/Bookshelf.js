import React from 'react';
import { Book } from './Book';


export class Bookshelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
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
            </div>
        );
    }
}
