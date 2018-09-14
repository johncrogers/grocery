import React from "react";
import { Table, Tab } from "semantic-ui-react";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentList: [],
      selectedDepartment: ""
    };
    this.buildDepartmentList = this.buildDepartmentList.bind(this);
    this.removeIngredientFromList = this.removeIngredientFromList.bind(this);
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
      this.props.updateView(newView);
    });
  }
  removeIngredientFromList(targetIngredient) {
    let newUser = this.props.user;
    newUser.ingredients = newUser.ingredients.filter(ingredient => {
      return ingredient.name !== targetIngredient;
    });
    this.props.updateUser(newUser);
  }
  buildIngredientRow(ingredient) {
    let CartRow = (
      <Table.Row>
        <Table.Cell>{ingredient.name}</Table.Cell>
        <Table.Cell selectable negative collapsing>
          <a
            href="#"
            onClick={() => {
              this.removeIngredientFromList(ingredient.name);
            }}
          >
            Skip
          </a>
        </Table.Cell>
        <Table.Cell selectable positive collapsing>
          <a
            href="#"
            onClick={() => {
              this.removeIngredientFromList(ingredient.name);
            }}
          >
            Found
          </a>
        </Table.Cell>
      </Table.Row>
    );
    return CartRow;
  }
  componentDidMount() {
    this.buildDepartmentList(this.props.user.ingredients);
  }
  componentWillReceiveProps() {
    this.buildDepartmentList(this.props.user.ingredients);
  }
  render() {
    return (
      <div id="Cart">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Shopping List</Table.HeaderCell>
              <Table.HeaderCell colSpan={2} collapsing>
                Filters:&nbsp;
                <select
                  name=""
                  id="departmentSelector"
                  onChange={this.handleSelectedDepartmentChange}
                  value={this.state.selectedDepartment}
                >
                  <option value="remove">Select a department...</option>
                  {this.state.departmentList.map(department => {
                    return (
                      <option value={department} key={department}>
                        {department}
                      </option>
                    );
                  })}
                </select>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.user.ingredients.map(ingredient => {
              if (!this.props.view.department) {
                return this.buildIngredientRow(ingredient);
              } else {
                if (ingredient.department === this.props.view.department) {
                  return this.buildIngredientRow(ingredient);
                }
              }
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}
export default Cart;
