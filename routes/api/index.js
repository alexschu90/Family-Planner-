const router = require("express").Router();
const userRoutes = require("./users");

const homeworkRoutes = require("./homework");

// user routes
router.use("/users", userRoutes);
router.use("/homework", homeworkRoutes);
module.exports = router;