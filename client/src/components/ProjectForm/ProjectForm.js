import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import API from '../../utils/API'
import { Redirect } from 'react-router-dom'


class ProjectForm extends React.Component {

    // STATE
    constructor(props) {
        super(props)
        this.state = {
            //projects: [],
            projectTitle: '',
            creator: '',
            startDate: '',
            deadLine: ''
        }
    }
    // handleInputChange
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    // handleFormSubmit
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.setState({ projects: [] });
        console.log(this.state);
        
        API.saveProject({
            projectTitle: this.state.projectTitle,
            creator: this.state.creator,
            startDate: this.state.startDate,
            deadLine: this.state.deadLine
        })
            
            .then(obj => console.log(obj))
            .catch(err => console.log(err));

        
/*
        API.saveProject({
            projectTitle: this.state.projectTitle,
            creator: this.state.creator,
            startDate: this.state.startDate,
            deadLine: this.state.deadLine
        })
            .then(res => <Link to={`/profile`} key={res.data}/>)
            .catch(err => console.log(err));
*/
            
    };



    render() {
        return (
            <React.Fragment>
                <Container>

                    <Form>
                        <Form.Group controlId="formUserName">
                            <Form.Label>Project Administrator</Form.Label>
                            <Form.Control
                                name="creator"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Enter username"
                            />
                        </Form.Group>

                        <Form.Group controlId="formProjectTitle">
                            <Form.Label>Project Name</Form.Label>
                            <Form.Control
                                name="projectTitle"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="What are you working on?"
                            />
                        </Form.Group>

                        <Form.Group controlId="formStartDate">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control
                                name="startDate"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="When was this assigned?"
                            />
                        </Form.Group>

                        <Form.Group controlId="formDeadLine">
                            <Form.Label>Deadline</Form.Label>
                            <Form.Control
                                name="deadLine"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="When is this to be completed by?"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.handleFormSubmit} >
                            Submit
                </Button>
                    </Form>
                </Container>

            </React.Fragment>
        );
    };


}

export default ProjectForm



/*
class ProjectForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // hold results
            projects:[],
            // db params
            creator: null,
            projectTitle: null,
            startDate: null,
            deadLine: null
        }
    }
    handleFormSubmit = (e) => {
        e.preventDefault();


    }

    handleInputChange = (e) => {
        e.preventDefault();
        // grab the keypressEvent
        //console.log(e);
        console.log(e.target.name);
        console.log(e.target.value);
    }



    render() {

        return(
            <React.Fragment>


                    <h1>Enter your info below!</h1>

                    <form onSubmit={this.handleFormSubmit}>
                        <p><input type="text" placeholder="enter username" name="creator" onChange={this.handleInputChange} /></p>
                        <p><input type="text" placeholder="Project Title" name="projectTitle" onChange={this.handleInputChange} /></p>
                        <p><input type="text" placeholder="Start Date" name="startDate" onChange={this.handleInputChange} /></p>
                        <p><input type="text" placeholder="Deadline" name="deadLine" onChange={this.handleInputChange} /></p>
                        <p><button>Submit Project!</button></p>
                    </form>



            </React.Fragment>
        )
    }


}
export default ProjectForm

*/








/*
class ProjectForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: {
                projectTitle: '',
                creator: '',
                startDate: '',
                deadLine: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        alert("Form has been successfully submitted! :: "+this.state.value.projectTitle);
        e.preventDefault();
    }


    render() {
        return(
            <React.Fragment>

                    <form method="post" onSubmit={this.handleSubmit} >
                        <input type="text" value={this.state.value.projectTitle} onChange={this.handleChange} placeholder="Project Title" /> <br/>
                        <input type="text" value={this.state.value.creator} onChange={this.handleChange} placeholder="Username" /> <br/>
                        <input type="text" value={this.state.value.startDate} onChange={this.handleChange} placeholder="Start Date" /> <br/>
                        <input type="text" value={this.state.value.deadLine} onChange={this.handleChange} placeholder="Due Date" /> <br/>
                        <br/>
                        <input type="submit" vlaue="submit" />
                    </form>


            </React.Fragment>
        )
    }


}
export default ProjectForm
*/


/*
class ProjectForm extends React.Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);

    };

    handleChange = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        if (this.projectForm()) {
            let fields = {};
            fields["projectTitle"] = "";
            fields["creator"] = "";
            fields["startDate"] = "";
            fields["deadLine"] = "";
            this.setState({ fields: fields });
            alert("PROJECT SUBMITTED!")
        };
    }

    projectForm = () => {
        let fields = this.state.fields;
        let errors = {};
        let isFormValid = true;

        if (!fields['creator']) {
            isFormValid = false;
            errors["creator"] = "* Please Enter username!";
        }
        if (typeof fields["creator"] !== "undefined") {
            if (!fields["creator"].match(/^[a-zA-z ]*$/)) {
                isFormValid = false;
                errors["creator"] = "*  please add aplhabetical characters!";
            }
        }


        if (!fields["projectTitle"]) {
            isFormValid = false;
            errors["projectTitle"] = "* Please define the title of the project!";
        }
        if (typeof fields["projectTitle"] !== "undefined") {
            if (!fields["projectTitle"].match(/^[a-zA-z ]*$/)) {
                isFormValid = false;
                errors["projectTitle"] = "* please user alphabetical characters only!";
            }
        }

        this.setState({
            errors: errors
        });
        return isFormValid;

    }

    render() {
        return(
            <React.Fragment>
                <div id="register">

                <h3>Enter Details Below</h3>
                <form method="post" name="userProjectForm" onSubmit={this.submitForm}>
                    <label>Username:</label>
                    <input type="text" name="creator" value={this.state.fields.creator} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.creator}</div>

                    <label>Project Title</label>
                    <input type="text" name="projectTitle" value={this.state.fields.projectTitle} />
                        <div className="errorMsg">{this.state.errors.projectTitle}</div>

                    <label>Start Date</label>
                    <input type="text" name="startDate" value={this.state.fields.startDate} onChange={this.handleChange} />
                    <br/>
                    <label>Dead Line</label>
                    <input type="text" name="deadLine" value={this.state.fields.deadLine} onChange={this.handleChange} />
                    <br/>
                    <input  style={{ marginLeft: '15.8%' }} type="submit" className="button" value="Register"/>


                </form>


                </div>



            </React.Fragment>
        )
    }



}
export default ProjectForm
*/


// /\ ATT::2 /\


// \/ ATT::1 \/

