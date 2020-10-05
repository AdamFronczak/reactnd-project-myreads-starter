import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { BooksList } from './BooksList';
import { SearchBooks } from './SearchBooks';



class BooksApp extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <BooksList setState={this.setState} />
            </Route>
            <Route path="/search">
              <SearchBooks />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default BooksApp
