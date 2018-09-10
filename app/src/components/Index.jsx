import React from "react";
import ReactDOM from "react-dom";
import ingredients from "../../../db/sampleData/ingredients.js";
import Nav from "./common/Nav/Nav.jsx";
import View from "./View/View.jsx";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        show: "Cart"
      },
      user: {
        ingredients: ingredients
      }
    };
  }
  render() {
    // console.log(`Render Index`, this.props);
    return (
      <div>
        <Nav view={this.state.view} user={this.state.user} />
        <View view={this.state.view} user={this.state.user} />
      </div>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
