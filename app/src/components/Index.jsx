import React from "react";
import ReactDOM from "react-dom";
// import ingredients from "../../../db/_sampleData/ingredients.js";
import Nav from "./Nav/Nav.jsx";
import View from "./View/View.jsx";
import axios from "axios";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        show: "Cart",
        department: null
      },
      user: {
        ingredients: []
      }
    };
    this.updateView = this.updateView.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.getIngredients = this.getIngredients.bind(this);
  }
  updateView(newView) {
    this.setState({ view: newView });
  }
  updateUser(newUser) {
    this.setState({ user: newUser });
  }
  getIngredients() {
    axios.get("/api/cart/ingredients").then(response => {
      let newUser = this.state.user;
      newUser.ingredients = response.data;
      this.updateUser(newUser);
    });
  }
  componentDidMount() {
    this.getIngredients();
  }
  render() {
    return (
      <div>
        <Nav
          view={this.state.view}
          user={this.state.user}
          updateView={this.updateView}
          updateUser={this.updateUser}
        />
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
