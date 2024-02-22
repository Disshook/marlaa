const express = require("express");
const upload = require("../middleware/fileUpload");

const { protect, authorize } = require("../middleware/protect");
const {
  createSupply,
  deleteSupply,
  getSupplies,
  getSupply,
  updateSupply,
} = require("../controller/supply");
const router = express.Router();

//"/api/v1/user"
// protect, authorize("admin"),  nemeh
router.route("/").get(getSupplies).post(createSupply);
router
  .route("/:id")
  .put(updateSupply) // authorize("admin"), hassan
  .delete(deleteSupply)
  .get(getSupply); // authorize("admin"), hassan

module.exports = router;
