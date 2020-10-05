import React from 'react';
import { Bookshelf } from './Bookshelf';
import { OpenSearch } from './OpenSearch';



export class BooksList extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        books: []
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf title="Currently Reading" books={this.state.books} />
                        <Bookshelf title="Want to Read" books={this.state.books} />
                        <Bookshelf title="Read" books={this.state.books} />
                    </div>
                </div>
                <OpenSearch setState={this.props.setState} />
            </div>
        );
    }
}
