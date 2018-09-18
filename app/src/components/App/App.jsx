import React from "react";
import Nav from "./Nav/Nav.jsx";
import View from "./View/View.jsx";
import { Grid } from "semantic-ui-react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render App`, this.props);
    return (
      <Grid id="App">
        <Grid.Row>
          <Grid.Column>
            <Nav
              view={this.props.view}
              user={this.props.user}
              updateView={this.props.updateView}
              updateUser={this.props.updateUser}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
            <View
              view={this.props.view}
              user={this.props.user}
              updateView={this.props.updateView}
              updateUser={this.props.updateUser}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
export default App;
