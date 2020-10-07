import React from 'react';
import { Bookshelf } from './Bookshelf';
import { OpenSearch } from './OpenSearch';



export class BooksList extends React.Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf title="Currently Reading" books={this.props.books.filter(b => b.shelf === "currentlyReading")}
                                   onAddOrUpdateBook={this.props.onAddOrUpdateBook} onRemoveBook={this.props.onRemoveBook} />

                        <Bookshelf title="Want to Read" books={this.props.books.filter(b => b.shelf === "wantToRead")}
                                   onAddOrUpdateBook={this.props.onAddOrUpdateBook} onRemoveBook={this.props.onRemoveBook} />

                        <Bookshelf title="Read" books={this.props.books.filter(b => b.shelf === "read")}
                                   onAddOrUpdateBook={this.props.onAddOrUpdateBook} onRemoveBook={this.props.onRemoveBook} />
                    </div>
                </div>
                <OpenSearch />
            </div>
        );
    }
}
