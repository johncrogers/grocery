import React from "react";
import { Segment, Button, Divider, Form } from "semantic-ui-react";
class AccountChoices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateApp = this.updateApp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.attemptAuth = this.attemptAuth.bind(this);
    this.attemptSignup = this.attemptSignup.bind(this);
  }
  updateApp() {
    let newConfig = this.props.App;
    newConfig.user.authorized = true;
    this.props.updateApp(newConfig);
  }
  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }
  attemptAuth() {
    this.props.App.resources.app
      .postRequest("/auth/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(`response:`, response);
      })
      .catch(err => {
        console.log(`Auth Error:`, err);
      });
  }
  attemptSignup() {
    this.props.App.resources.app
      .postRequest("/auth/signup", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(`response:`, response);
      })
      .catch(err => {
        console.log(`Auth Error:`, err);
      });
  }

  render() {
    console.log(`Render AccountChoices`, this.props);
    return (
      <Segment padded id="AccountChoices">
        <Form>
          <Form.Input
            label="Enter Username"
            type="input"
            name="username"
            onChange={this.handleChange}
          />
          <Form.Input
            label="Enter Password"
            type="password"
            name="password"
            onChange={this.handleChange}
          />
        </Form>
        <Divider horizontal>And</Divider>
        <Button
          primary
          fluid
          onClick={() => {
            this.attemptAuth();
          }}
        >
          Login
        </Button>
        <Divider horizontal>Or</Divider>
        <Button
          secondary
          fluid
          onClick={() => {
            this.attemptSignup();
          }}
        >
          Sign Up
        </Button>
      </Segment>
    );
  }
}
export default AccountChoices;
