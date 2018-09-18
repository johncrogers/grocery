import React from "react";
import Menu from "./Menu/Menu.jsx";
import Cart from "./Cart/Cart.jsx";

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // show: "Default"
    };
  }
  render() {
    // console.log(`Render View`);
    // console.log(" -> Props: ", this.props);
    // console.log(" -> State: ", this.state);
    switch (this.props.view.show) {
      case "Menu":
        return (
          <Menu
            view={this.props.view}
            user={this.props.user}
            updateView={this.props.updateView}
            updateUser={this.props.updateUser}
          />
        );

      case "Cart":
        return (
          <Cart
            view={this.props.view}
            user={this.props.user}
            updateView={this.props.updateView}
            updateUser={this.props.updateUser}
          />
        );

      default:
        return (
          <Cart
            view={this.props.view}
            user={this.props.user}
            updateView={this.props.updateView}
            updateUser={this.props.updateUser}
          />
        );
    }
  }
}
export default View;
