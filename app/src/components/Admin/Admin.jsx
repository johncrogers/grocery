import React from "react";
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Admin`, this.props);
    return <div id="Admin">Admin</div>;
  }
}
export default Admin;
