import * as React from "react";

import BookAction from "./BookAction";
import {SingleBook} from "./SingleBook";
import "./BookList.css";

export class BookList extends React.Component {
  requestFilteringOnSeries = (series_name) => (e) => {
    BookAction.filterBySeries(series_name);
  }

  renderBooksList(books){
    return books.map(
    (b, i) => <SingleBook key={b.series.replace(/ /g, "_")+b.volume_number+i}
        series={b.series}
        number={b.volume_number}
        image={b.image}
    />);
  }

  renderSeries(books){
    const unduped_series_set = new Set(books.map(b => b.series));
    let unduped_series = [];
    unduped_series_set.forEach(series_name => unduped_series.push(series_name));
    const sorted_series = unduped_series.sort();

    return sorted_series.map(series_name => <div key={"book-item"+series_name} className="book-series-item">
        <span onClick={this.requestFilteringOnSeries(series_name)}>{series_name}</span>
    </div>)
  }

  render(){
    return <div>
      {this.props.showSeries?
        <div className="book-series">{this.renderSeries(this.props.books)}</div>
      : <div className="book-list">{this.renderBooksList(this.props.books)}</div>}
    </div>;
  }
}
