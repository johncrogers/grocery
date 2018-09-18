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
      <AccountChoices
        view={this.props.view}
        user={this.props.user}
        updateView={this.props.updateView}
        updateUser={this.props.updateUser}
      />
    );
  }
}
export default Splash;
