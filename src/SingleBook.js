import * as React from "react";
import BookAction from "./BookAction";

import "./SingleBook.css";

export class SingleBook extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isFullImageLoaded: false,
      showImageInCompactMode: false
    };
  }

  requestFilteringOnSeries = (e) => {
    BookAction.filterBySeries(this.props.series);
  }

  toggleImageVisibility = (_) => {
    if(this.state.showImageInCompactMode === false){
        // the image will be shown when the method terminates
        // so, download the real image now in background
        this.downloadImage();
    }
    this.setState({
      showImageInCompactMode: !this.state.showImageInCompactMode
    });

  }

  downloadImage() {
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

  renderImageOrPlaceholder(altText){
      return (this.state.isFullImageLoaded?
        <img src={this.props.image} alt={altText} />
        :
        <svg width={300} height={400} alt={altText}>
          <rect width={300} height={400} style={{
            fill: this.props.base64Placeholder
          }} />
        </svg>
      )
 }

  renderFullSizedBook() {
    const volumeNumber = this.props.number === 0 ? "(unique)" : this.props.number;
    const altText = this.props.series + " - " + volumeNumber;
    // request it now, we know that the user is (hopefully) on desktop right now
    this.downloadImage();
    return <div className="book-item">
      <div className="book-description">{this.renderImageOrPlaceholder(altText)}</div>
      <div className="book-text-container">
        <span onClick={this.requestFilteringOnSeries}>
            {this.props.series}</span>
        <span>- {volumeNumber}</span>
      </div>
    </div>;
  }

  renderHidableBook = () => {
    const volumeNumber = this.props.number === 0 ? "(unique)" : this.props.number;
    const altText = this.props.series + " - " + volumeNumber;
    const title = `${this.props.series} - ${volumeNumber}`;
    const arrow = this.state.showImageInCompactMode?"▲":"▼";
    return <div className="book-item">
        <div onClick={this.toggleImageVisibility}>{`${title} ${arrow}`}</div>
        {this.state.showImageInCompactMode?
          this.renderImageOrPlaceholder(altText)
        : null}
    </div>
  }

  render() {
    if(window.innerWidth < 1000) {
      return this.renderHidableBook();
    }
    else {
      return this.renderFullSizedBook();
    }
  }
}
