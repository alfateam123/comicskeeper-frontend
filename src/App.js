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
      showError: false,
      showSeriesTab: true,
      series: [],
      loadingBooks: true
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
        showError: BookStore.couldNotRetrieveBooks(),
        showSeriesTab: !BookStore.filterSeries,
        series: BookStore.getSeries(),
        loadingBooks: false
      });
    }
  };

  removeFilter(e) {
    BookAction.removeFilter();
  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Comics Keeper</h1>
        </header>
        {this.state.showError?<p className="App-books-error">Error while retrieving books</p>:null}
        {this.state.loadingBooks?
          <p>Loading...</p>
        : <BookList showSeries={this.state.showSeriesTab}
                  series={this.state.series}
                  books={this.state.books} />
        }
      </div>
    );
  }
}

export default App;
