# microBoss


###>>> NOTES <<<
// Establish folder structure
// FRONT << React >> 'established'
    --> Components
    --> 'initial state'
            >> state for initial load(landingPage) << handle(initialEntry_Prereqs, home/about)
            >> state for IF user is at 'loginscreen' << handle(username, pwd, [? forgot password ?])
            >> state for IF user is at 'theSwitch-page' << SIGMA(profiles.map(projects))
    --> REACT-ROUTER-DOM
    >>>>>>PAGES>>>>>>>
        ->> login
        ->> profile
    --> @material-ui/core || bulma
    --> AJAX


// BACK << connect MongoDB && define Schema(s) >> './models'
    --> establish NODE.ENVIRONMENT
    --> establish MONGOOSE
    --> create << Schemas >> MODELS directory
        **SCHEMA**
     >>>    PROJECT-SCHEMA
     >>>    USER_PROFILE-SCHEMA   
        ======================
        --> changes via CONTROLLER
    --> AXIOS
    --> ROUTES (pages && api)
