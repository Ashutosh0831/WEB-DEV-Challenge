const userModel = require("../model/user.model");

async function registerController(req, res) {
  const { name, email, username, password } = req.body;
  const userRegister = await userModel.create({
    name,
    email,
    username,
    password,
  });

  res.status(201).json({
    message: "user got registered successfully",
    userRegister,
  });
}

async function loginController(req, res) {
    const {username, password} = req.body

    const isUser = await userModel.findOne({username})

    if(!isUser){
        return res.status(404).json({
            message: "User not present in the database"
        })
    }

    const isPass = isUser.password === password

    if(!isPass){
        return res.status(404).json({
            message:"Your password is mismatch"
        })
    }

    res.status(200).json({
        message:`Hello ${isUser.name} welcome to the world of redbug`
    })

}

module.exports = {
  registerController,
  loginController,
};
