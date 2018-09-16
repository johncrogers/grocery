import React from "react";
import { Menu } from "semantic-ui-react";
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleMenuChange = this.handleMenuChange.bind(this);
  }
  handleMenuChange(targetView) {
    // let newView = this.props.view;
    let newView = {};
    newView.config = {};
    newView.show = targetView;
    this.props.updateView(newView);
  }
  handleItemClick(name) {
    this.setState({ activeItem: name }, () => {
      this.handleMenuChange(name);
    });
  }
  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <Menu.Item
          name="Cart"
          active={activeItem === "Cart"}
          onClick={(e, { name }) => {
            this.handleItemClick(name);
          }}
        >
          Cart
        </Menu.Item>

        <Menu.Item
          name="Menu"
          active={activeItem === "Menu"}
          onClick={(e, { name }) => {
            this.handleItemClick(name);
          }}
        >
          Menu
        </Menu.Item>
      </Menu>
    );
  }
}
export default Nav;
