import Axios from 'axios'

export default {
    // getProjects *   GET
    getProjects: function() {
        return Axios.get('/api/projects');
    },
    // getProject(_id) **  GET
    getProjectsByID: function(id) {
        return Axios.get(`localhost:8080/api/projects/:${id}`);
    },
    // saveProject  POST
    saveProject: function(projData) {
        return Axios.post('/api/projects', projData);
    },
    // deleteProject(_id)  DELETE
    deleteProject: function(id) {
        return Axios.delete(`/api/projects/${id}`);
    },
    //=====================
    // getProfiles *  GET
    getProfiles: function() {
        return Axios.get('/api/profiles');
    },
    // getProfile(_id) ** GET
    getProfile: function(id) {
        return Axios.get(`/api/profiles/${id}`);
    },

    // addProfileToCollabList(Profile)  POST
    createProfile: function(signUpData) {
        return Axios.post('/api/profiles', signUpData);
    },

    // deleteProfile(_id)   DELETE
    deleteProfile: function(id) {
        return Axios.delete(`/api/profiles/${id}`);
    }
}