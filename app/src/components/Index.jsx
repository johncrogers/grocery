import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav/Nav.jsx";
import View from "./View/View.jsx";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        show: "Cart",
        config: {}
      },
      user: {
        ingredients: []
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

  componentDidMount() {}
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
