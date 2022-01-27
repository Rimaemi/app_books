const express = require('express');
const controller = require("../controller");

const router = express.Router();

router.get("/", controller.sendLandingPage);

router.get("/new-book", controller.getNewBookPage);
router.post("/new-book", controller.insertNewBook);

router.get("/search-book", controller.getSearchBookPage);
router.post("/search-book", controller.findBook);

router.get("/update-book", controller.getUpdateBookPage);

router.get("/delete-book", controller.getDeleteBookPage);
router.post("/delete-book", controller.deleteBook);

module.exports = router;