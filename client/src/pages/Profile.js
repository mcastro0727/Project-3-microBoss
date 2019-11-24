import React, { Component } from 'react'
import { Button, Form, FormControl, Navbar, Nav } from 'react-bootstrap'
import API from '../utils/API'

import ProfileGrid from '../components/ProfileGrid'


class Profile extends Component {
    
    /** SessionLoggedIN & !SessionLoggedIN  // 
     * userName that's logged in
     * AccountDetails
     * SECTION FOR PROJECTS_CREATED
     * MIDDLE SECTION FOR PORJECT_SELECTED
     * SECTION FOR CHATBOX
     * use searchar to search people ??MAYBE??
     * 
       */
    // STATE / PROPS
    constructor(props) {
      super(props);
    }
    
    
    
    // ++ componentDidMount >> getProjectsByID
    // > get api.profilesByID / 'user logged in'
    /*
    componentDidMount() {
      API.getProjectsByID(this.props.params)
       

      //console.log(this.props)
      

    }
    */


    // fetchData 'projectsCreated' / 'projectsInProgress'::'projectSelected' \ CHATBOX
    
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
  
  <ProfileGrid />
       

  </React.Fragment>
                        

        );
    };



}

export default Profile