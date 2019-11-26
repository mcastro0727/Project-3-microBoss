import React, { Component }  from 'react'
import ProjectForm from '../ProjectForm'

class UserProjectScope extends Component {
    constructor(props) {
        super(props);

    }

    // componentDidMount

    // handleCollabsSubmit
    // handleObjectiveAddition
    // handleAssignee
    // handleObjectivePOST
    // handleObjectiveFinalize



    //===========
    // TODOS::
    // createCard to Display intial data
    // * form !!!!
    // >>> + New Objective/Task
            // taskName, taskDescription, assigned:who?@all?
            // >>> + addNewTask
    // >>> + Assignees(GET OTHER PROFILES)
    // >>> + FINALIZE-SUBMIT PROJECT!



    render() {
        // ARGGGG

        return(
            <React.Fragment>
                <h1>SCOPE</h1>
                <ProjectForm />

            </React.Fragment>
        )
    }
    
}
export default UserProjectScope