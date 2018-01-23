import * as React from "react";

export class SingleBook extends React.Component {
  render() {
    console.log("singlebook", this.props);

    return <div>
      <p style={{fontWeight: "bolder"}}>{this.props.title}</p>
      <p>{this.props.author || "Author: n/a"}</p>
    </div>;
  }
}
