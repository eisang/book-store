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
    const checkoutList = this.props.book
      .filter(book => {
        console.log("this", this.state.type, book);
        return book[this.state.type].includes(this.state.searchCriteria);
      })
      .map(book => (
        <Book key={book.id} book={book} addBook={this.props.addBook} />
      ));
    return (
      <div>
        <form>
          <input
            style={{ marginLeft: "5px" }}
            type="text"
            placeholder="search"
            onChange={this.handleChange}
            value={this.state.searchCriteria}
            name="searchCriteria"
          />
          <select
            style={{ marginLeft: "30px", marginBottom: "25px" }}
            name="type"
            onChange={this.handleChange}
            value={this.state.type}
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
          </select>
        </form>

        {checkoutList}
      </div>
    );
  }
}
