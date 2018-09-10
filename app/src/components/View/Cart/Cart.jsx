import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(`Render Cart`);
    // console.log(" -> Props: ", this.props);
    // console.log(" -> State: ", this.state);
    return (
      <table id="Cart">
        {/* <thead colSpan="2">
          <tr>
            <td>Cart:</td>
          </tr>
        </thead> */}
        <tbody>
          {this.props.user.ingredients.map(ingredient => {
            return (
              <tr key={ingredient.name}>
                <td>{ingredient.name}</td>
                <td>{ingredient.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
export default Cart;
