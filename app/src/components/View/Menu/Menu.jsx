import React from "react";
import Dish from "./Dish.jsx";
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Menu`, this.props);
    return (
      <div id="Menu">
        Menu:
        {this.props.user.ingredients.map(ingredient => {
          return <Dish data={ingredient} />;
        })}
      </div>
    );
  }
}
export default Menu;
