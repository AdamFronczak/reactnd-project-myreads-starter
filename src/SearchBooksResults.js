import React from 'react';

export class SearchBooksResults extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="search-books-results">
                <ol className="books-grid"></ol>
            </div>
        );
    }
}
