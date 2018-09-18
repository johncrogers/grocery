import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.jsx";
import Splash from "./Splash/Splash.jsx";
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        authorized: false,
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
    console.log(`Render Index`);
    console.log(" -> Props: ", this.props);
    console.log(" -> Index State: ", this.state);
    switch (this.state.view.authorized) {
      case true:
        return (
          <App
            view={this.state.view}
            user={this.state.user}
            updateView={this.updateView}
            updateUser={this.updateUser}
          />
        );

      case false:
        return (
          <Splash
            view={this.state.view}
            user={this.state.user}
            updateView={this.updateView}
            updateUser={this.updateUser}
          />
        );

      default:
        return (
          <Splash
            view={this.state.view}
            user={this.state.user}
            updateView={this.updateView}
            updateUser={this.updateUser}
          />
        );
    }
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
