import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(`Render Nav`, this.props);
    return (
      <div id="Nav">
        Menu&nbsp;|&nbsp;
        {this.props.view.show}
      </div>
    );
  }
}
export default Nav;
