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
            <Nav updateApp={this.props.updateApp} config={this.props.config} />
          </Grid.Column>
        </Grid.Row>

        {/* <Grid.Row>
          <Grid.Column>
            <View updateApp={this.props.updateApp} config={this.props.config} />
          </Grid.Column>
        </Grid.Row> */}
      </Grid>
    );
  }
}
export default App;
