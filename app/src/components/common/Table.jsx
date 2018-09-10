import React from "react";
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Table`);
    console.log(" -> Props: ", this.props);
    console.log(" -> State: ", this.state);
    return (
      <table id={this.props.id}>
        <tbody>
          <tr>
            <td>Cell</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default Table;
