const { Router } = require("express");
const router = Router();
const { getUsers, deleteUser, createUser } = require("../controllers/user.controllers")

router.route("/")
    .get(getUsers)
    .post(createUser);

router.route("/:id")
    .delete(deleteUser);


module.exports = router;
