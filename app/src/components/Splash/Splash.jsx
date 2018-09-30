import React from "react";
import AccountChoices from "./AccountChoices/AccountChoices.jsx";
class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Splash`, this.props);
    return (
      <AccountChoices updateApp={this.props.updateApp} App={this.props.App} />
    );
  }
}
export default Splash;
