const express = require("express");
const upload = require("../middleware/fileUpload");

const { protect, authorize } = require("../middleware/protect");
const {
  createHall,
  deleteHall,
  getHall,
  getHalls,
  updateHall,
} = require("../controller/hall");
const router = express.Router();

//"/api/v1/user"
// protect, authorize("admin"),  nemeh
router.route("/").get(getHalls).post(upload.array("photos"), createHall);
router
  .route("/:id")
  .put(upload.array("photos"), updateHall) // authorize("admin"), hassan
  .delete(deleteHall)
  .get(getHall); // authorize("admin"), hassan

module.exports = router;
