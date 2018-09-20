import React from "react";
import { Table, Tab } from "semantic-ui-react";
import axios from "axios";
import data from '/Users/johnrogers/Desktop/Lunch Projects/grocery/db/_sampleData/ingredients.js'

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentList: [],
      shoppingList: [],
      skippedList: [],
      foundList: [],
      selectedStatus: ""
    };
    this.getIngredients = this.getIngredients.bind(this);
    this.filterIngredients = this.filterIngredients.bind(this);
    this.buildDepartmentList = this.buildDepartmentList.bind(this);
    this.saveIngredients = this.saveIngredients.bind(this);
    // this.removeIngredientFromList = this.removeIngredientFromList.bind(this);
    this.handleSelectedDepartmentChange = this.handleSelectedDepartmentChange.bind(
      this
    );
  }

  // MODEL FUNCTIONS
  // getIngredients(query) {
  //   console.log(`getIngredients(query)`, query);
  //   let queryString = "/api/cart/ingredients";
  //   if (query) {
  //     let count = 0;
  //     queryString += "?";
  //     Object.keys(query).forEach(key => {
  //       queryString += key + "=" + query[key];
  //       count++;
  //       count < Object.keys(query).length ? (queryString += "&") : null;
  //     });
  //   }
  //   console.log(`  -> url:`, queryString);

  //   axios.get(queryString).then(response => {
  //     console.log(`  -> response:`, response.data);
  //     this.filterIngredients(response.data);
  //     // this.buildDepartmentList(response.data);
  //   });
  // }
  getIngredients() {
    this.filterIngredients(data);
  }
  filterIngredients(ingredients) {
    console.log(`filterIngredients(ingredients)`, ingredients);
    let status = this.state.selectedStatus;
    console.log(`  -> status:`, status);
    ingredients = ingredients.filter(ingredient => {
      if (status.length) {
        return (status = ingredient.status);
      } else {
        return true;
      }
    });
    console.log(`  -> FILTER PERFORMED`);
    console.log(`  -> ingredients:`, ingredients);
    this.buildDepartmentList(ingredients);
  }
  buildDepartmentList(ingredients) {
    let departmentList = [];
    ingredients.forEach(ingredient => {
      if (!departmentList.includes(ingredient.department)) {
        departmentList.push(ingredient.department);
      }
    });
    this.setState({ departmentList: departmentList }, () => {
      this.saveIngredients(ingredients);
    });
  }
  saveIngredients(ingredients) {
    let newUser = this.props.user;
    newUser.ingredients = ingredients;
    this.props.updateUser(newUser);
  }

  // VIEW FUNCTIONS
  buildIngredientRow(ingredient) {
    let CartRow = (
      <Table.Row key={ingredient.name}>
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
  removeIngredientFromList(targetIngredient) {
    let newUser = this.props.user;
    newUser.ingredients = newUser.ingredients.filter(ingredient => {
      return ingredient.name !== targetIngredient;
    });
    this.props.updateUser(newUser);
  }
  handleSelectedDepartmentChange(event) {
    console.log(`handleSelectedDepartmentChange(event)`, event);
    let newDepartment = event.target.value;
    console.log(`  -> newDepartment:`, newDepartment);
    this.setState({ selectedDepartment: newDepartment }, () => {
      let newView = this.props.view;
      if (this.state.selectedDepartment === "remove") {
        newView.config.department = null;
      } else {
        newView.config.department = this.state.selectedDepartment;
      }
      this.props.updateView(newView);
    });
  }

  componentDidMount() {
    this.getIngredients();
    // this.buildDepartmentList(this.props.user.ingredients);
  }
  componentWillReceiveProps() {
    // this.buildDepartmentList(this.props.user.ingredients);
  }
  render() {
    return (
      <div id="Cart">
        <button
          onClick={() => {
            console.log(this.props);
          }}
        >
          Props
        </button>
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
