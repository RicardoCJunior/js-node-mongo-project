const express = require("express");
const router = express.Router();

const controller = require("../controllers/orderController");

router.post("/", controller.createOrder);
router.get("/list", controller.listOrders);
router.get("/:id", controller.getOrder);
router.put("/:id", controller.updateOrder);
router.delete("/:id", controller.deleteOrder);

module.exports = router;
