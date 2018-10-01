import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.jsx";
import Splash from "./Splash/Splash.jsx";
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {},
      user: {
        authorized: false
      },
      resources: {
        api: require("./../resources/api.js"),
        app: require("./../resources/app.js")
      }
    };
    this.updateApp = this.updateApp.bind(this);
  }
  updateApp(newConfig) {
    this.setState(newConfig, () => {
      localStorage.setItem("appData", JSON.stringify(newConfig));
    });
  }

  componentDidMount() {}
  render() {
    console.log(`Render Index`);
    console.log(" -> Props: ", this.props);
    console.log(" -> Index State: ", this.state);
    switch (this.state.user.authorized) {
      case true:
        return <App updateApp={this.updateApp} App={this.state} />;

      case false:
        return <Splash updateApp={this.updateApp} App={this.state} />;

      default:
        return <Splash updateApp={this.updateApp} App={this.state} />;
    }
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
