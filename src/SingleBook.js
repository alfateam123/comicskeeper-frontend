import * as React from "react";
import BookAction from "./BookAction";

import "./SingleBook.css";

export class SingleBook extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isFullImageLoaded: false
    };
  }

  requestFilteringOnSeries = (e) => {
    BookAction.filterBySeries(this.props.series);
  }

  componentDidMount() {
    // show the image once it's fully downloaded.
    // there is a small base64 placeholder to fill the space
    let img = new Image(300, 400);
    img.src = this.props.image;
    img.addEventListener("load", () => {
      this.setState({
        isFullImageLoaded: true
      });
    });
  }

  render() {
    const volumeNumber = this.props.number === 0 ? "(unique)" : this.props.number;
    return <div className="book-item">
      <div className="book-description">
      {this.state.isFullImageLoaded?
        <img src={this.props.image} alt={this.props.series + " - " + volumeNumber} />
        :
        <img src={this.props.base64Placeholder}
             width={300} height={400}
             alt={this.props.series + " - " + volumeNumber} />
      }
      </div>
      <div className="book-text-container">
        <span onClick={this.requestFilteringOnSeries}>
            {this.props.series}</span>
        <span>- {volumeNumber}</span>
      </div>
    </div>;
  }
}
