import * as React from "react";

export class SingleBook extends React.Component {
  requestFilteringOnSeries = (e) => {
    console.log("filter on series", e, this.props.series);
  }

  render() {
    console.log("singlebook", this.props);

    return <div className="book-item">
      <p className="book-description">
        <span onClick={this.requestFilteringOnSeries}>
            {this.props.series}</span> - {this.props.number === 0 ? "(unique)" : this.props.number}
      </p>
    </div>;
  }
}
