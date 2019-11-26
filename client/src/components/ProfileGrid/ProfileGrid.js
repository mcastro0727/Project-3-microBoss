import API from '../../utils/API';
import UserProjectScope from '../UserProjectScope'



class ProfileGrid extends React.Component {

    
    state = {
        userProjects: []
    }



    componentDidMount() {

       this.getProjects();
        console.log(this.state.userProjects)
    }

    getProjects = () => {
        
        API.getProjects()
            .then(e => 
                this.setState({ 
                    userProjects: e.data
                 })
            )
            .catch(err => console.log(err));

    }

    

    // method for hide form, show data
    // method for hide data, show form


    render() {
        const projects = this.state.userProjects;
        console.log(projects)
        
        return (
            <React.Fragment>

                <Container>
                    <div className="leftpane"><h1>Project List</h1> <br />
                        <button type="button" >Create New Project</button>
                        <br />
                        <br/>
                        {projects.map((project) => {
                            return (

                                <button type='button' key={project.id}>{project.projectTitle}</button>
                            )
                            })}
                    </div>

                    <div className="middlepane"><h1>Project Scope</h1> <br />
                        <UserProjectScope />
                    </div>

                    <div className="rightpane"><h1>INFO Box</h1>
                    </div>
                </Container>


            </React.Fragment>
        )
    }
}


export default ProfileGrid
