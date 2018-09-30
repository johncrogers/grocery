import React from "react";
import { Segment, Button, Divider, Form } from "semantic-ui-react";
import api from "./../../../resources/api.js";
class AccountChoices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
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
    api;
  }

  render() {
    console.log(`Render AccountChoices`, this.props);
    // const { value } = this.state;
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
        <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          State
        </button>
        <button
          onClick={() => {
            localStorage.setItem("user", JSON.stringify(this.state));
          }}
        >
          Set localStorage
        </button>
        <button
          onClick={() => {
            console.log(JSON.parse(localStorage.getItem("user")));
          }}
        >
          View localStorage
        </button>
        <Button
          primary
          fluid
          onClick={() => {
            this.updateApp();
          }}
        >
          Login
        </Button>
        <Divider horizontal>Or</Divider>
        <Button secondary fluid>
          Sign Up
        </Button>
      </Segment>
    );
  }
}
export default AccountChoices;
