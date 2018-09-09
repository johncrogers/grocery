import React from "react";
import ReactDOM from "react-dom";
import ListView from "./ListView/ListView.jsx";
import ingredients from "../../../db/sampleData/ingredients.js";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: ingredients
    };
  }
  render() {
    console.log(`Render Index`, this.props);
    return (
      <div>
        <h1>LIST:</h1>
        {/* <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          Index State
        </button>
        <button
          onClick={() => {
            console.log(this.props);
          }}
        >
          Index Props
        </button> */}
        {/* <ListView /> */}
        {this.state.ingredients.map(ingredient => {
          return (
            <div key={ingredient.name}>
              {ingredient.name} - {ingredient.price}
            </div>
          );
        })}
      </div>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
