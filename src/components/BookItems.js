import React, { Component } from "react";

export default class BookItem extends Component {
  render() {
    return (
      <div>
        <p>Title: {this.props.product.title}</p>
        <p>Pages: {this.props.product.pages}</p>
        <p>Publisher: {this.props.product.publisher}</p>
        <p>Price: {this.props.product.price}</p>
        <button
          className="bg-danger"
          onClick={() => this.props.removeBook(this.props.product.id)}
        >
          remove from cart
        </button>
      </div>
    );
  }
}
