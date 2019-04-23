import React, { Component } from "react";

export default class Book extends Component {
  render() {
    return (
      <div>
        <p>Title: {this.props.book.title}</p>
        <p>Author: {this.props.book.author}</p>

        <button
          className="bg-primary"
          onClick={() => this.props.addBook(this.props.book.id)}
        >
          Add book
        </button>
        <hr />
      </div>
    );
  }
}
