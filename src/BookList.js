import * as React from "react";

import {SingleBook} from "./SingleBook";

export class BookList extends React.Component {
  render(){
    return this.props.books.map(b => <SingleBook key={b.title.replace(/ /g, "_")}
                                               title={b.title} />);
  }
}
