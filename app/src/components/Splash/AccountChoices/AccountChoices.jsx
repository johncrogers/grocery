import React from "react";
import { Segment, Button, Divider } from "semantic-ui-react";
class AccountChoices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  changeView() {
    let newView = this.props.view;
    newView.authorized = true;
    this.props.updateView(newView);
  }
  render() {
    console.log(`Render AccountChoices`, this.props);
    return (
      <Segment padded id="AccountChoices">
        <Button
          primary
          fluid
          onClick={() => {
            this.changeView();
          }}
        >
          Login
        </Button>
        <Divider horizontal>Or</Divider>
        <Button secondary fluid>
          Sign Up Now
        </Button>
      </Segment>
    );
  }
}
export default AccountChoices;
