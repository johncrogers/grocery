import React from "react";
// IMPORT DEBUGGER
class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // error: null,
      // showDebugger: true
    };
    // this.handleDebuggerToggle = this.handleDebuggerToggle.bind(this);
  }
  // handleDebuggerToggle() {
  //   if (this.state.showDebugger) {
  //     this.setState({ showDebugger: false });
  //   } else {
  //     this.setState({ showDebugger: true });
  //   }
  // }
  render() {
    console.log(`Render Select`, this.props);
    return (
      <select name={this.props.name} id={this.props.id}>
        //
      </select>
    );
  }
}
export default Select;
