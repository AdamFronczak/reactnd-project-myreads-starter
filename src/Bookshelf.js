import React from 'react';
import { Book } from './Book';


export class Bookshelf extends React.Component {
    constructor(props) {
        super(props);
    }

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
                                          onUpdateBook={this.props.onUpdateBook} onRemoveBook={this.props.onRemoveBook} />
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        );
    }
}
