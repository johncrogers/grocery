import React from "react";
import Select from "../../common/form/Select/Select.jsx";
import Table from "../../common/Table.jsx";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentList: [],
      selectedDepartment: null
    };
    this.buildDepartmentList = this.buildDepartmentList.bind(this);
    this.handleSelectedDepartmentChange = this.handleSelectedDepartmentChange.bind(
      this
    );
  }
  buildDepartmentList(ingredients) {
    let departmentList = [];
    ingredients.forEach(ingredient => {
      if (!departmentList.includes(ingredient.department)) {
        departmentList.push(ingredient.department);
      }
    });
    this.setState({ departmentList: departmentList });
  }
  handleSelectedDepartmentChange(event) {
    this.setState({ selectedDepartment: event.target.value }, () => {
      let newView = this.props.view;
      if (this.state.selectedDepartment === "remove") {
        newView.department = null;
      } else {
        newView.department = this.state.selectedDepartment;
      }
      console.log(`newView:`, newView);
      this.props.updateView(newView);
    });
  }
  componentDidMount() {
    this.buildDepartmentList(this.props.user.ingredients);
  }
  render() {
    // console.log(`Render Cart`);
    // console.log(" -> Props: ", this.props);
    // console.log(" -> State: ", this.state);
    return (
      <div>
        {/* <Select />
        <Table /> */}
        <select
          name=""
          id="departmentSelector"
          onChange={this.handleSelectedDepartmentChange}
          value={this.state.selectedDepartment}
        >
          <option value="remove">Select a department...</option>
          <option value="remove">Remove Filter</option>
          {this.state.departmentList.map(department => {
            return <option value={department}>{department}</option>;
          })}
        </select>
        <table>
          <tbody>
            {this.props.user.ingredients.map(ingredient => {
              if (!this.props.view.department) {
                return (
                  <tr>
                    <td>{ingredient.name}</td>
                    <td>{ingredient.price}</td>
                    <td>{ingredient.department}</td>
                  </tr>
                );
              } else {
                if (ingredient.department === this.props.view.department) {
                  return (
                    <tr>
                      <td>{ingredient.name}</td>
                      <td>{ingredient.price}</td>
                      <td>{ingredient.department}</td>
                    </tr>
                  );
                }
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Cart;
