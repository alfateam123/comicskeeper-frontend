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
      currentFilteringPattern: null,
      showError: false,
      showSeriesTab: true
    }
  }

  componentDidMount() {
    BookStore.addListener(this.setBooks);

    BookAction.retrieveBooksList();
  }

  setBooks = () => {
    const books = BookStore.getBooks();
    if(books !== undefined){
      this.setState({
        books: books,
        currentFilteringPattern: BookStore.filterSeries,
        showError: BookStore.couldNotRetrieveBooks(),
        showSeriesTab: !BookStore.filterSeries
      });
    }
  };

  removeFilter(e) {
    BookAction.removeFilter();
  }

  renderFilterHandler(filter_pattern) {
    if(filter_pattern){
      return <p>Filtering by: {`"${this.state.currentFilteringPattern}"`}
          <span className="App-filtering-close" onClick={this.removeFilter}>{"\u2715"}</span>
        </p>;
    }
    else {
      return null;
    }
  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Comics Keeper</h1>
        </header>
        <div className="App-intro">
          {this.renderFilterHandler(this.state.currentFilteringPattern)}
        </div>
        {this.state.showError?<p className="App-books-error">Error while retrieving books</p>:null}
        <BookList showSeries={this.state.showSeriesTab} books={this.state.books} />
      </div>
    );
  }
}

export default App;
