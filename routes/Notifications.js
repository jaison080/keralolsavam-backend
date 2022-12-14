const { Delete_Notification } = require("../controller/Notification/Delete_Notification");
const {Get_Notification}= require("../controller/Notification/Get_Notification");
const {post_Notification}= require("../controller/Notification/post_Notification");
const { Put_Notification } = require("../controller/Notification/Put_Notification");


const router = require("express").Router();

router.post("/", post_Notification);
router.get("/", Get_Notification);
router.put("/:id", Put_Notification);
router.delete("/:id", Delete_Notification);

module.exports = router;

