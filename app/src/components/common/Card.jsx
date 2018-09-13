import React from "react";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Card`, this.props);
    return (
      <div id="Card">
        <h3>{this.props.title}</h3>
        {this.props.text}
      </div>
    );
  }
}
export default Card;
