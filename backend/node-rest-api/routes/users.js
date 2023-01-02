const express = require("express");
const router = express.Router();
const {getUser, createUser, updateUser, deleteUser, login, register} = require('../controllers/userControllers');
const { protect } = require("../middlewares/auth");

// router
//   .route("/")
//   .get(getUser)
  // .post(createUser);

router.route('/login').post(login)

router.route('/register').post(register)

router
  .route("/:id")
  .put(updateUser)
  .delete(deleteUser);

router.get('/user',protect, getUser)

module.exports = router;
