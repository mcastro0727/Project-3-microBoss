import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import { Button } from "react-bulma-components/full";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>About iSaiah :)</h1>
              <div>
                <h2>
                  Hello, my name is Isaiah. I will help you finish your task,
                  project or any bullshit you procrastinate on.
                </h2>
              </div>
            </Jumbotron>
          </Col>
          {/* {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
          {/* </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Login</h1>
            </Jumbotron> */}
          {/* <form>
              <label>
                Username:
                <input type="text" name="name">
                  Enter Here
                </input>
                Password:
                <input type="text" name="name">
                  Enter Here
                </input>
              </label>
            </form> */}
        </Row>
      </Container>
    );
  }
}

/* <form onSubmit={this.handleSubmit} noValidate>
  <div className="firstName">
    <label htmlFor="firstName">First Name</label>
  </div>
</form> */

export default Books;
