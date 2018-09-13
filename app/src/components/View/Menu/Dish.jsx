import React from "react";
import Card from "./../../common/Card.jsx";
class Dish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Dish`, this.props);
    return (
      <Card title={this.props.data.name} text={this.props.data.department} />
    );
  }
}
export default Dish;
