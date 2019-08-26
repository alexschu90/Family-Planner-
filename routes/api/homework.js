const router = require("express").Router();
const homeworkController = require("../../controllers/homeworkController");

// Matches with "/api/homework"
router.route("/")
  .get(homeworkController.findAll)
  .post(homeworkController.create);

// Matches with "/api/homework/:email"
router
  .route("/:email")
  .get(homeworkController.findById)
  .put(homeworkController.update)
  .delete(homeworkController.remove);

module.exports = router;