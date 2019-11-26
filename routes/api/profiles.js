const router = require("express").Router();
const houston = require("../../controllers/houston");

// Matches with "/api/profiles"
router
  .route("/")
  .get(houston.findAll)
  .post(houston.create);

// Matches with "/api/profiles/:id"
router
  .route("/:id")
  .get(houston.findById)
  .put(houston.update)
  .delete(houston.remove);

module.exports = router;