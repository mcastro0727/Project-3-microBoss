import React, { Component } from 'react'

import Button from 'react-bootstrap/Button'
import Form  from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import ProjectForm from '../components/ProjectForm'



class CreateProject extends Component {
    

    // STATE

    // handleInputChange
    // handleFormSubmit method
    
    render() {
        return(
            <React.Fragment>
            <Navbar bg="light" variant="light">
    <Navbar.Brand href="/" style={{ fontWeight: "bolder", fontStyle: "italic" }}>microBoss</Navbar.Brand>
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
  
      <ProjectForm />  


  </React.Fragment>
                        

        )
    }



}

export default CreateProject