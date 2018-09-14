import React from "react";
// import Card from "./../../common/Card.jsx";
import { Card } from "semantic-ui-react";
class Dish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Dish`, this.props);
    return (
      <Card>
        <Card.Content header={this.props.data.name} />
        <Card.Content>
          {this.props.data.department} <br />
          {this.props.data.price}
        </Card.Content>
      </Card>
    );
  }
}
export default Dish;
// title={this.props.data.name} text={this.props.data.department}
