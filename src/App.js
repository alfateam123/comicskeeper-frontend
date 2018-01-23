import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BookAction from "./BookAction";
import BookStore from "./BookStore";

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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.books.map(b => <p key={b.title}>{b.title}</p>)}
      </div>
    );
  }
}

export default App;
