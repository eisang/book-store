import React, { Component } from "react";
import BookItems from "./BookItems";

export default class CheckoutCart extends Component {
  render() {
    const cartListItems =
      this.props.bookItem.length > 0
        ? this.props.map(book => {
            return (
              <BookItems
                key={book.id}
                item={book}
                removeBook={this.props.removeBook}
              />
            );
          })
        : null;

    return <div>{cartListItems}</div>;
  }
}
