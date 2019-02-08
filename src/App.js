import React, { Component } from "react";
import "./App.css";
import HeaderNav from "./components/HeaderNav";
import BookCollection from "./components/BookCollection";
import CheckoutCart from "./components/CheckoutCart";
import axios from "axios";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount = async () => {
    try {
      const res = await fetch("http://localhost:8000/books");
      const json = await res.json();
      this.setState({
        books: json.map(book => {
          return {
            ...book,
            inCart: false
          };
        })
      });
    } catch (e) {
      alert(e);
    }
  };
  bookItems = () => this.state.books.filter(book => book.inCart);

  addBook = id => {
    axios.patch(`http://localhost:8000/books/cart/add/${id}`).then(res => {
      const individualBooks = this.state.books.filter(book => book.id !== id);
      this.setState({
        books: [...individualBooks, ...res.data]
      });
    });
  };

  removeBook = id => {
    axios.patch(`http://localhost:8000/books/cart/remove/${id}`).then(res => {
      const individualBooks = this.state.books.filter(book => book.id !== id);
      this.setState({
        books: [...individualBooks, ...res.data]
      });
    });
  };

  render() {
    return (
      <div className="App">
        <HeaderNav name="here" />
        <div className="row">
          <div className="col-7">
            <BookCollection
              book={this.state.books.filter(book => book.inCart !== true)}
              addBook={this.addBook}
            />
          </div>
          <div className="col-5 bg-warning">
            <CheckoutCart
              removeBook={this.removeBook}
              bookItems={this.bookItems()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
