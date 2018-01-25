import * as React from "react";
import BookAction from "./BookAction";

export class SingleBook extends React.Component {
  requestFilteringOnSeries = (e) => {
    BookAction.filterBySeries(this.props.series);
  }

  render() {
    return <div className="book-item">
      <p className="book-description">
        <span onClick={this.requestFilteringOnSeries}>
            {this.props.series}</span> - {this.props.number === 0 ? "(unique)" : this.props.number}
      </p>
    </div>;
  }
}
