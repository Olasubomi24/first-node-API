// user.router.js
const {
    createUser,
    getUsersByUserId,
    getUsers,
    updateUser,
    deleteUser
} = require("./user.controller");

const router = require("express").Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUsersByUserId);
router.patch("/", updateUser);
router.delete("/", deleteUser);
router.post("/login",);
module.exports = router;
