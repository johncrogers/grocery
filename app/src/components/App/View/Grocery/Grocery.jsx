import React from "react";
import { Table } from "semantic-ui-react";
import { data } from "./../../../../../../db/_sampleData/ingredients";
class Grocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentList: []
    };
    this.getShoppingList = this.getShoppingList.bind(this);
    this.buildDepartmentList = this.buildDepartmentList.bind(this);
    // this.markIngredientFound = this.markIngredientFound.bind(this);
    // this.markIngredientFound = this.markIngredientFound.bind(this);
    this.buildRows = this.buildRows.bind(this);
    this.buildDepartmentOptions = this.buildDepartmentOptions.bind(this);
  }
  // DATA
  getShoppingList() {
    // shoppingList is just a list of ingredients_shoppinglists with a status of pending
    // cart is just a list of ingredients_shoppinglists with a status of found
    // all pulls every
    let newUser = this.props.user;

    let status = this.props.view.config.Grocery.currentList;
    newUser.shoppingList = data;
    this.buildDepartmentList(newUser.shoppingList);

    this.props.updateUser(newUser);
  }
  buildDepartmentList(ingredients) {
    let departmentList = [];
    ingredients.forEach(ingredient => {
      if (!departmentList.includes(ingredient.department)) {
        departmentList.push(ingredient.department);
      }
    });
    this.setState({ departmentList: departmentList }, () => {});
  }
  // markIngredientFound(ingredient) {
  //   let newShoppingList = this.props.newUser.shoppingList;
  // }

  // VIEW
  // determineListToView(viewOption) {
  //   if (viewOption === "shoppingList") {
  //   }
  // }
  buildDepartmentOptions() {
    return this.state.departmentList.map(department => {
      return <option value={department}>{department}</option>;
    });
  }
  buildRows(ingredients) {
    console.log(`buildRows:`);
    console.log(`  -> ingredients?`, ingredients ? true : false);
    if (ingredients) {
      ingredients = this.filterIngredients(ingredients);
      console.log(`  -> ingredients after filter?`, ingredients ? true : false);
      return ingredients.map(ingredient => {
        return (
          <Table.Row key={ingredient.name}>
            <Table.Cell>{ingredient.name}</Table.Cell>
            <Table.Cell
              negative
              collapsing
              textAlign="right"
              onClick={() => {
                console.log(`Skip!`);
                // this.markIngredientSkip(ingredient);
              }}
            >
              Skip
            </Table.Cell>
            <Table.Cell
              positive
              collapsing
              textAlign="right"
              onClick={() => {
                console.log(`Found!`);
                // this.markIngredientFound(ingredient);
              }}
            >
              Found
            </Table.Cell>
          </Table.Row>
        );
      });
    } else {
      return (
        <Table.Row>
          <Table.Cell colSpan="3">Your shopping list is empty.</Table.Cell>
        </Table.Row>
      );
    }
  }
  componentDidMount() {
    this.getShoppingList();
  }

  render() {
    // console.log(`Render Grocery`, this.props);
    return (
      <Table striped selectable singleLine unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Shopping List</Table.HeaderCell>
            <Table.HeaderCell />
            <Table.HeaderCell>
              <select name="department" id="">
                {this.buildDepartmentOptions()}
              </select>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.buildRows(
            this.props.user[this.props.view.config.Grocery.currentList]
          )}
        </Table.Body>
      </Table>
    );
  }
}
export default Grocery;
