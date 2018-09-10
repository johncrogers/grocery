import React from "react";
import ReactDOM from "react-dom";
import ingredients from "../../../db/sampleData/ingredients.js";
import Nav from "./common/_custom/Nav/Nav.jsx";
import View from "./View/View.jsx";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        show: "Cart",
        department: null
      },
      user: {
        ingredients: ingredients
      }
    };
    this.updateView = this.updateView.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  updateView(newView) {
    this.setState({ view: newView });
  }
  updateUser(newUser) {
    this.setState({ user: newUser });
  }

  render() {
    // console.log(`Render Index`, this.props);
    return (
      <div>
        <Nav view={this.state.view} user={this.state.user} />
        <View
          view={this.state.view}
          user={this.state.user}
          updateView={this.updateView}
          updateUser={this.updateUser}
        />
      </div>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
