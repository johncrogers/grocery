import React from "react";
import Menu from "./Menu/Menu.jsx";
import Grocery from "./Grocery/Grocery.jsx";
import Admin from "./Admin/Admin.jsx";

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

      case "Admin":
        return (
          <Admin
            view={this.props.view}
            user={this.props.user}
            updateView={this.props.updateView}
            updateUser={this.props.updateUser}
          />
        );

      case "Grocery":
        return (
          <Grocery
            view={this.props.view}
            user={this.props.user}
            updateView={this.props.updateView}
            updateUser={this.props.updateUser}
          />
        );

      default:
        return (
          <Admin
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
