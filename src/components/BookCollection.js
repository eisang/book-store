import React, { Component } from "react";
import Book from "./Book";

export default class BookCollection extends Component {
  state = {
    searchCriteria: "",
    type: "title"
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const checkoutList = this.props.books
      .filter(book => book[this.state.type].includes(this.state.searchCriteria))
      .map(book => (
        <Book key={book.id} book={book} addBook={this.props.addBook} />
      ));
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="search"
            onChange={this.handleChange}
            value={this.state.searchCriteria}
            name="searchCriteria"
          />
          <select
            name="type"
            onchange={this.handleChange}
            value={this.state.type}
          />
        </form>

        {checkoutList}
      </div>
    );
  }
}
