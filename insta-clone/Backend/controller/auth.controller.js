const userModel = require("../model/user.model");
const webtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function registerController(req, res) {
  const { name, email, username, password } = req.body;

  const isUserPresent = await userModel.findOne({ username });

  if (isUserPresent) {
    return res.status(400).json({
      message: "User with this username Already Present",
    });
  }

  hashPassword = await bcrypt.hash(password, 10);

  const userRegister = await userModel.create({
    name,
    email,
    username,
    password: hashPassword,
  });

  const token = webtoken.sign(
    {
      user: userRegister.username,
      name: userRegister.name,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "10m" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "user got registered successfully",
    userRegister,
  });
}

async function loginController(req, res) {
  const { username, password } = req.body;

  const isUser = await userModel.findOne({ username });

  if (!isUser) {
    return res.status(404).json({
      message: "User not present in the database",
    });
  }

  const isPass = await bcrypt.compare(password, isUser.password)

  if (!isPass) {
    return res.status(404).json({
      message: "Your password is mismatch",
    });
  }

  const token = webtoken.sign(
    {
      user: isUser.username,
      name: isUser.name,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "10m" },
  );

  res.cookie("token", token);

  res.status(200).json({
    message: `Hello ${isUser.name} welcome to the world of redbug`,
  });
}

module.exports = {
  registerController,
  loginController,
};
