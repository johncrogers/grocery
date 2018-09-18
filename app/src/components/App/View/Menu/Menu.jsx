import React from "react";
import Dish from "./Dish.jsx";
import { Card } from "semantic-ui-react";
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Menu`, this.props);
    return (
      <Card.Group itemsPerRow={4} id="Menu">
        {/* Menu: */}
        {this.props.user.ingredients.map(ingredient => {
          return <Dish data={ingredient} />;
        })}
      </Card.Group>
    );
  }
}
export default Menu;
