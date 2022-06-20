const express = require("express");
const router = express.Router();
const courseController = require("../app/controllers/CourseController");

router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:slug", courseController.show);
router.get("/:_id/edit", courseController.edit);
router.patch("/:_id", courseController.update);
router.delete("/:_id", courseController.destroy);

module.exports = router;
