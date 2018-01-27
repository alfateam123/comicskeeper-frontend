import * as React from "react";

import {SingleBook} from "./SingleBook";
import "./BookList.css";

export class BookList extends React.Component {
  render(){
    const singleBooks = this.props.books.map(
    (b, i) => <SingleBook key={b.series.replace(/ /g, "_")+b.volume_number+i}
        series={b.series}
        number={b.volume_number}
        image={b.image}
    />);
    return <div className="book-list">{singleBooks}</div>;
  }
}
