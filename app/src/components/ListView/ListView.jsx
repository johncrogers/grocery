import React from "react";
class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render ListView`);
    console.log(" -> Props: ", this.props);
    console.log(" -> State: ", this.state);
    return (
      <table id="ListView">
        <thead>Head</thead>
        <tbody>
          <tr>
            <td>
              {/* ListView
              <button
                onClick={() => {
                  console.log(this.state);
                }}
              >
                ListView State
              </button>
              <button
                onClick={() => {
                  console.log(this.props);
                }}
              >
                ListView Props
              </button> */}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default ListView;
