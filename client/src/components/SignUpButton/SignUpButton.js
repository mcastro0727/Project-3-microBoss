import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";

class SignUpButton extends Component {
  //   state = {
  //     userEmail: "",
  //     password: ""
  //   };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h2>
                {" "}
                <a href="signupcreds">Sign Up</a>
              </h2>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUp;
