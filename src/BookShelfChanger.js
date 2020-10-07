import React from 'react';
import { BookShelfChangerOption } from './BookShelfChangerOption';


export class BookShelfChanger extends React.Component {
    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={e => this.props.onSelect(e.target.value)} value={this.props.currentShelf}>
                    <option value="move" disabled>Move to...</option>
                    <BookShelfChangerOption value="currentlyReading" title="Currently Reading" currentShelf={this.props.currentShelf} />
                    <BookShelfChangerOption value="wantToRead" title="Want to Read" currentShelf={this.props.currentShelf} />
                    <BookShelfChangerOption value="read" title="Read" currentShelf={this.props.currentShelf} />
                    <BookShelfChangerOption value="none" title="None" currentShelf={this.props.currentShelf} />
                </select>
            </div>
        );
    }
}
