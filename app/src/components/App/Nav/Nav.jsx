import React from "react";
import { Menu } from "semantic-ui-react";
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateApp = this.updateApp.bind(this);
  }
  updateApp(targetView) {
    if (targetView === "Log Out") {
      let newUser = {
        authorized: false
      };
      let newView = {};
      const newConfig = {
        user: newUser,
        view: newView
      };
      this.props.updateApp(newConfig);
    } else {
      let newView = this.props.config.view;
      newView.show = targetView;
      const newConfig = {
        view: newView
      };
      this.props.updateApp(newConfig);
    }
  }
  handleItemClick(name) {
    this.setState({ activeItem: name }, () => {
      this.updateApp(name);
    });
  }
  render() {
    const { activeItem } = this.state;
    return (
      <Menu secondary>
        {/* <Menu.Item
          name="Cart"
          active={activeItem === "Cart"}
          onClick={(e, { name }) => {
            this.handleItemClick(name);
          }}
        >
          Cart
        </Menu.Item> */}
        {/* <Menu.Item
          name="Menu"
          active={activeItem === "Menu"}
          onClick={(e, { name }) => {
            this.handleItemClick(name);
          }}
        >
          Menu
        </Menu.Item> */}
        <Menu.Menu position="right">
          <Menu.Item
            name="Admin"
            active={activeItem === "Admin"}
            onClick={(e, { name }) => {
              this.handleItemClick(name);
            }}
          >
            Admin
          </Menu.Item>
          <Menu.Item
            name="Log Out"
            active={activeItem === "Log Out"}
            onClick={(e, { name }) => {
              this.handleItemClick(name);
            }}
          >
            Log Out
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
export default Nav;
