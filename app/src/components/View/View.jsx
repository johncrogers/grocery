import React from "react";
// import OptionalComponent from "./OptionalComponent/OptionalComponent.jsx";
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
      // case "OptionalComponent":
      // return <OptionalComponent />;

      default:
        return <Cart view={this.props.view} user={this.props.user} />;
    }
  }
}
export default View;
