import React from 'react';

export class BookShelfChangerOption extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <option value={this.props.value} disabled={this.props.currentShelf === this.props.value ? true : null}>{this.props.title}</option>
        );
    }
}
