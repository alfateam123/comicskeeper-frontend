import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import BookAction from "./BookAction";
import BookStore from "./BookStore";
import {BookList} from "./BookList";

class App extends Component {
  constructor(){
    super();
    this.state = {
      books: [],
      currentFilteringPattern: null
    }
  }

  componentDidMount() {
    console.log("didComponentMount was called!");
    BookStore.addListener(this.setBooks);

    BookAction.retrieveBooksList();
  }

  setBooks = () => {
    const books = BookStore.getBooks();
    console.log(">>>", books);
    if(books !== undefined){
      this.setState({
        books: books,
        currentFilteringPattern: BookStore.filterSeries
      });
    }
  };

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Comics Keeper</h1>
        </header>
        <p className="App-intro">
          {this.state.currentFilteringPattern?
              <p>Filtering by: {`"${this.state.currentFilteringPattern}"`}</p>
              :null}
        </p>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
