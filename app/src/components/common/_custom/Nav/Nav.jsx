import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleMenuChange = this.handleMenuChange.bind(this);
  }
  handleMenuChange(targetView) {
    let newView = this.props.view;
    newView.show = targetView.target.value;
    this.props.updateView(newView);
  }
  render() {
    // console.log(`Render Nav`, this.props);
    return (
      <div id="Nav">
        <select name="Menu" id="Menu" onChange={this.handleMenuChange}>
          <option value="Cart">Cart</option>
          <option value="Menu">Menu</option>
        </select>
        &nbsp;|&nbsp;
        {this.props.view.show}
      </div>
    );
  }
}
export default Nav;
