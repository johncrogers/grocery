import React from "react";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render SignIn`, this.props);
    return <div id="SignIn">SignIn</div>;
  }
}
export default SignIn;
