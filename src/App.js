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

  updateBook = (updatedBook) => {
    this.setState(currentState => {
      const newBooks = currentState.books.map(x => x.id === updatedBook.id ? updatedBook : x);
      return { books: newBooks };
    });
  }

  removeBook = (deletedBook) => {
    this.setState(currentState => {
      const newBooks = currentState.books.filter(x => x.id !== deletedBook.id);
      return { books: newBooks };
    });
  }

  addBook = (newBook) => {
    this.setState(currentState => {
      const newBooks = currentState.books.concat([newBook]);
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
              <BooksList books={this.state.books} onUpdateBook={this.updateBook} onRemoveBook={this.removeBook} />
            </Route>
            <Route path="/search">
              <SearchBooks onAddBook={this.addBook} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default BooksApp
