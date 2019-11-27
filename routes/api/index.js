const router = require("express").Router();
const profilesAPI = require('./profiles');
const projectsAPI = require('./projects');

router.use('/profiles', profilesAPI);
router.use('/projects', projectsAPI);

module.exports = router;
