import * as React from "react";

import BookAction from "./BookAction";
import BookStore from "./BookStore";
import {SingleBook} from "./SingleBook";
import "./BookList.css";
import "./BookLeftPanel.css";

export class BookList extends React.Component {
  requestFilteringOnSeries = (series_name) => (e) => {
    BookAction.filterBySeries(series_name);
  }

  renderBooksList(books){
    if(!BookStore.filterSeries) return [];

    return books.map(
    (b, i) => <SingleBook key={b.series.replace(/ /g, "_")+b.volume_number+i}
        series={b.series}
        number={b.volume_number}
        image={b.image}
    />);
  }

  renderSeries(sorted_series){
    return sorted_series.map(series_name => <div key={"book-item"+series_name} className="book-series-item">
        <span onClick={this.requestFilteringOnSeries(series_name)}>{series_name}</span>
    </div>)
  }

  render(){
    const series = this.props.series || [];
    const books = this.props.books || [];
    return <div className="book-container">
      <div className="book-series">{this.renderSeries(series)}</div>
      <div className="book-list">{this.renderBooksList(books)}</div>
    </div>;
  }
}
