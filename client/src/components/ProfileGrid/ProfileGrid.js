import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import './style.css'
import API from '../../utils/API';
import UserProjectScope from '../UserProjectScope'


class ProfileGrid extends React.Component {
    
    state = {
        userProjects: []
    }

    
    componentDidMount() {
        
        API.getProjects(this.props.userName)
            .then(e => {
                //const dbDATA = e.data
                // console.log(e.data)

                const newObject = [];

                e.data.map(data => {
                    newObject.push(data);
                    
                })
                
                this.setState({ userProjects: newObject })
                console.log(this.state)
                
            })
            .catch(err => console.log(err));
        
    }

    handleProjectList = () => {

    }
    //const [userProjects, extendProject] = useState(props);
    // /.\ -possibly change 'props to a method that takes intialState as the const *?|?*



    render() {
        // console.log(this.state.userProjects)
        const Projs = this.state.userProjects;

        return (
            <React.Fragment>

                <Container>
                    <div className="leftpane"><h1>Project List</h1> <br />
                        <h4>hello</h4>
                        {}
                        <br />

                    </div>

                    <div className="middlepane"><h1>Project Scope</h1> <br />
                       <UserProjectScope />
                    </div>

                    <div className="rightpane"><h1>Chat Box</h1>
                    </div>
                </Container>


            </React.Fragment>
        )
    }
}


export default ProfileGrid
