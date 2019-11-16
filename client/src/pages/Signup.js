import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

class SignUp extends Component {
  state = {
    isClicked: false
  };

  render() {
    {
      if (this.state.isClicked === false)
        return (
          <Container>
            <Row>
              <Col size="md-6">
                <Jumbotron>
                  <h2>
                    {" "}
                    <button
                      onClick={e => {
                        this.setState({ isClicked: true });
                      }}
                    >
                      Sign Up
                    </button>
                  </h2>
                </Jumbotron>
              </Col>
            </Row>
          </Container>
        );
      else
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
                          placeholder=" Your Email Here"
                          name="email"
                        />
                        <div>
                          <label htmlFor="Password">Password</label>
                          <input
                            type="text"
                            className=""
                            id="Password"
                            placeholder=" Create a password"
                            name="email"
                          />
                        </div>
                        <a href="">Confirm</a>
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
}

export default SignUp;
