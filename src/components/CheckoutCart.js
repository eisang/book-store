import React, { Component } from "react";
import BookItems from "./BookItems";

export default class CheckoutCart extends Component {
  render() {
    const cartListItems =
      this.props.bookItems.length > 0
        ? this.props.bookItems.map(product => {
            return (
              <BookItems
                key={product.id}
                product={product}
                removeBook={this.props.removeBook}
              />
            );
          })
        : null;
    const totalPrice = this.props.bookItems.reduce(
      (acc, product) => acc + product.price,
      0
    );

    return (
      <div>
        {cartListItems}
        Total: {totalPrice}
      </div>
    );
  }
}
