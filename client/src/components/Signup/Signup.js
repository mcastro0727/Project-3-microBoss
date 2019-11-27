import React, { Component } from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import axios from "../../utils/API";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      username: "",
      password: "",
      confirmPassword: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    console.log("sign-up handleSubmit, username: ");
    console.log(this.state.username);
    event.preventDefault();
    //request to server to add a new username/password
    axios
      .post("/user/", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful signup");
          this.setState({
            //redirect to login page
            redirectTo: "/login"
          });
        } else {
          console.log("username already taken");
        }
      })
      .catch(error => {
        console.log("signup error: ");
        console.log(error);
      });
  }

  render() {
    {
      if (this.state.isClicked === false)
        return (
          // <Container>
          //   <Row>
          //     <Col size="md-6">
          //       <Jumbotron>
          //         <h2>
          //           {" "}
          //           <button
          //             onClick={e => {
          //               this.setState({ isClicked: true });
          //             }}
          //           >
          //             Sign Up
          //   </button>
          // </h2>
          //       </Jumbotron>
          //     </Col>
          //   </Row>
          // </Container>
          <div className="level">
            <div className="column is-half">
              <div className="notification is-primary">
                <h2>
                  {" "}
                  <button
                    className="button is-success"
                    onClick={e => {
                      this.setState({ isClicked: true });
                    }}
                  >
                    Sign Up
                  </button>
                </h2>
              </div>
            </div>
          </div>
        );
      else
        return (
          // <Container>
          //   <Row>
          //     <Col size="md-6">
          //       <Jumbotron>
          //         <div className="wrapper">
          //           <div className="form-wrapper">
          //             <h1>Create Account</h1>
          //             <form onSubmit={this.handleSubmit} noValidate>
          //               <label htmlFor="Email">Email</label>
          //               <input
          //                 type="text"
          //                 className=""
          //                 id="Email"
          //                 placeholder=" Your Email Here"
          //                 name="email"
          //               />
          //               <div>
          //                 <label htmlFor="Password">Password</label>
          //                 <input
          //                   type="text"
          //                   className=""
          //                   id="Password"
          //                   placeholder=" Create a password"
          //                   name="email"
          //                 />
          //               </div>
          // <a href="">Confirm</a>
          //             </form>
          //           </div>
          //         </div>
          //       </Jumbotron>
          //     </Col>
          //   </Row>
          // </Container>

          <div className="columns">
            <div className="column is-half" padding="50px">
              <div className="field">
                <div className="notification is-primary" style={signUpBox}>
                  <label className="labelFor">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      placeholder="Email"
                    ></input>
                  </div>

                  <div className="column is-half">
                    <div className="field">
                      <label className="labelFor">Password</label>
                      <div className="control">
                        <input
                          className="input"
                          type="password"
                          placeholder="Password"
                        ></input>
                        <a href="">Confirm</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  }
}

const signUpBox = {
  padding: "50px",
  margin: "10px",
  border: "75px"
};

export default SignUp;
