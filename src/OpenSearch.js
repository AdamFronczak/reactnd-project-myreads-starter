import React from 'react';
import { Link } from 'react-router-dom'

export class OpenSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        );
    }
}
