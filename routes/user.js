const express = require("express");
const {handleAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateUser} = require("../controllers/user");

const router = express.Router();


router.route("/").get(handleAllUsers).post(handleCreateUser);

router.route("/:id").get(handleGetUserById).patch(handleUpdateUserById).delete( handleDeleteUserById);

module.exports = router;