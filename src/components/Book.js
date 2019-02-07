import React, { Component } from "react";

export default class Book extends Component {
  render() {
    // const { title, description } = this.props.books;
    return (
      <div>
        {/* <span>title:{this.props.books.title}</span> */}
        <button onClick={() => this.props.addBook(this.props.book.id)}>
          Add Book
        </button>
      </div>
    );
  }
}
