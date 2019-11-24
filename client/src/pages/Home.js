import React, { Component, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form  from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Login from '../components/Login'





class Home extends Component {

    // STATE

    // loggedIn
    // !loggedIn
    // signUp ????


    render() {
        return(
            <React.Fragment>
            <Navbar bg="light" variant="light">
    <Navbar.Brand href="/" style={{ fontWeight: "bolder", fontStyle: 'italic' }}>microBoss</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/profile">Profile</Nav.Link>
      <Nav.Link href="/createproject">Create New Project</Nav.Link>
      <Nav.Link href="#contact">Contact Us</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>

            <h1>Home</h1>
            <ul>
                <Login />
                <li>About microBoss</li>
            </ul>

         </React.Fragment>   
                
            
        )
    }



}


export default Home