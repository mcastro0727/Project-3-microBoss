import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import { Button } from "react-bulma-components/full";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  render() {
    return (
      // <Container fluid>
      //   <Row>
      //     <Col size="md-12">
      //       <Jumbotron>
      //         <h1>About iSaiah :)</h1>
      //         <div>
      //           <h2>
      //             Hello, my name is Isaiah. I will help you finish your task,
      //             project or any bullshit you procrastinate on.
      //           </h2>
      //         </div>
      //       </Jumbotron>
      //     </Col>
      //   </Row>
      // </Container>
      <section className="hero">
        <div className="hero-body">
          <div className="container" style={headerBox}>
            <h1 className="title">iSaiah</h1>
            <h2 className="subtitle">
              <strong>
                {" "}
                To increase user’s ability to manage time to accomplish a
                project at hand, based on user-set deadlines to follow. Allow
                users to save hours of time organizing thoughts and ideas by
                utilizing a workflow structure to achieve project completion at
                an efficient and effective rate.{" "}
              </strong>
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

const headerBox = {
  padding: "50px",
  backgroundColor: "black",
  color: "white"
};
/* <form onSubmit={this.handleSubmit} noValidate>
  <div className="firstName">
    <label htmlFor="firstName">First Name</label>
  </div>
</form> */

export default Books;
