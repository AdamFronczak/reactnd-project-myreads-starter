import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BooksList } from './BooksList';
import { SearchBooks } from './SearchBooks';



class BooksApp extends React.Component {
    state = {
        books: []
    }
    
    addOrUpdateBook = (updatedBook) => {
        BooksAPI.update(updatedBook, updatedBook.shelf);

        this.setState(currentState => {
            const newBooks = currentState.books
                .filter(x => x.id !== updatedBook.id)
                .concat([updatedBook]);
            return { books: newBooks };
        });
    }
    
    removeBook = (deletedBook) => {
        this.setState(currentState => {
            const newBooks = currentState.books.filter(x => x.id !== deletedBook.id);
            return { books: newBooks };
        });
    }
    
    componentDidMount() {
        BooksAPI.getAll()
            .then(b => this.setState({books: b}));
    }
    
    render() {
        return (
            <Router>
                <div className="app">
                    <Switch>
                        <Route exact path="/">
                            <BooksList books={this.state.books} onAddOrUpdateBook={this.addOrUpdateBook} onRemoveBook={this.removeBook} />
                        </Route>
                        <Route path="/search">
                            <SearchBooks books={this.state.books} onAddOrUpdateBook={this.addOrUpdateBook} onRemoveBook={this.removeBook} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default BooksApp
    