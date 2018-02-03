import * as React from "react";
import BookAction from "./BookAction";

import "./SingleBook.css";

export class SingleBook extends React.Component {
  requestFilteringOnSeries = (e) => {
    BookAction.filterBySeries(this.props.series);
  }

  render() {
    const volumeNumber = this.props.number === 0 ? "(unique)" : this.props.number;
    return <div className="book-item">
      <div className="book-description">
        <img src={this.props.image} alt={this.props.series + " - " + volumeNumber} />
      </div>
      <div className="book-text-container">
        <span onClick={this.requestFilteringOnSeries}>
            {this.props.series}</span>
        <span>- {volumeNumber}</span>
      </div>
    </div>;
  }
}
