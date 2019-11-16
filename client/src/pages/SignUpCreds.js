import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

class SignUpCreds extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <div className="wrapper">
                <div className="form-wrapper">
                  <h1>Create Account</h1>
                  <form onSubmit={this.handleSubmit} noValidate>
                    <label htmlFor="Email">Email</label>
                    <input
                      type="text"
                      className=""
                      id="Email"
                      placeholder="Your Email Here"
                      name="email"
                    />
                  </form>
                </div>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUpCreds;
