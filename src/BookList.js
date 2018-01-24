import * as React from "react";

import {SingleBook} from "./SingleBook";
import "./BookList.css";

export class BookList extends React.Component {
  render(){
    const singleBooks = this.props.books.map(
    (b, i) => <SingleBook key={b.title.replace(/ /g, "_")+i}
        title={b.title}
        series={b.series}
        number={b.volume_number}
    />);
    return <div className="book-list">{singleBooks}</div>;
  }
}
