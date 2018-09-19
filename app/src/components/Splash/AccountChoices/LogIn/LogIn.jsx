import React from "react";
class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render LogIn`, this.props);
    return <div id="LogIn">LogIn</div>;
  }
}
export default LogIn;
