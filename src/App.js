import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import BookAction from "./BookAction";
import BookStore from "./BookStore";
import {BookList} from "./BookList";

class App extends Component {
  constructor(){
    super();
    this.state = {books: []}
  }

  componentDidMount() {
    console.log("didComponentMount was called!");
    BookStore.addListener(this.setBooks);

    BookAction.retrieveBooksList();
  }

  setBooks = () => {
    console.log(">>>", BookStore.books);
    if(BookStore.books !== undefined){
      this.setState({
        books: BookStore.books
      });
    }
  };

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
			{/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Comics Keeper</h1>
        </header>
        <p className="App-intro">
			{/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        </p>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
