const express = require("express");
const upload = require("../middleware/fileUpload");

const { protect, authorize } = require("../middleware/protect");
const {
  createCat,
  deleteCat,
  getCat,
  getCats,
  updateCat,
} = require("../controller/category");
const router = express.Router();

//"/api/v1/user"
// protect, authorize("admin"),  nemeh
router.route("/").get(getCats).post(createCat);
router
  .route("/:id")
  .put(updateCat) // authorize("admin"), hassan
  .delete(deleteCat)
  .get(getCat); // authorize("admin"), hassan

module.exports = router;
