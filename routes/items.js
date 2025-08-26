const express = require("express");
const router = express.Router();
const itemsController = require("../controllers/itemsController");

router.get("/health", itemsController.healthCheck);
router.get("/items", itemsController.getAllItems);
router.get("/items/filter", itemsController.getFilteredItems);

module.exports = router;
