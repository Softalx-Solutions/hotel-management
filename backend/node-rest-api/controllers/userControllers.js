const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    const error = "Email and password is required!";
    console.log(error.red.underline);
    res.status(400);
    throw new Error(error);
  }

  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: (await user).id,
      email: (await user).email,
      token: generateToken(user._id),
    });
  } else {
    const error = "Invalid credentials!";
    console.log(error.red.underline);
    res.status(400);
    throw Error("Invalid credentials!");
  }
});

const register = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    const error = "Email and password is required!";
    console.log(error.red.underline);
    res.status(400);
    throw Error(error);
  }

  const userExist = await User.findOne({ email });

  //Check if user exists
  if (userExist) {
    console.log("User already exists!".red.underline);
    res.status(400);
    throw Error("User already exists!");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    email,
    password: hashedPassword,
  });
  password;

  if (user) {
    await console.log("Registered user:\n", user);
    res.status(201).json({
      _id: (await user).id,
      email: (await user).email,
      token: generateToken(user._id),
    });
  }
});

const getUser = asyncHandler(async (req, res) => {
  const { _id, email } = await User.findById(req.user.id);
  res.status(200).json({
    id: _id,
    email: email,
  });
});

// const createUser = asyncHandler(async (req, res) => {
//   if (!req.body) {
//     res.status(400);
//     throw new Error("Email and password field are needed!");
//   }
//   console.log(req.body);
//   res.json({ message: req.body });
// });

const updateUser = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Fields to update are needed!");
  }
  res.json({ message: "PUT method" });
});

const deleteUser = asyncHandler(async (req, res) => {
  res.json({ message: "DELETE method" });
});

// Generate jwt tokens
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  getUser,
  // createUser,
  deleteUser,
  updateUser,
  login,
  register,
};
