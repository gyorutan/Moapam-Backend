const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

exports.CheckUsername = async (req, res) => {
  try {
    const { username } = req.body;
    const usernameExists = await User.exists({ username }).exec();
    if (usernameExists) {
      return res.status(409).json({ success : false });
    } else {
      return res.status(200).json({ success : true , username: username  });
    };
  } catch (error) {
    console.log(error);
  };
};

exports.Login = async (req, res) => {
  try {
    const { loginId, loginPw } = req.body;
    const user = await User.findOne({ loginId }).exec();
    if (!user) {
      return res.status(401).json({
        cause: "id",
        success: false,
      });
    }
    const match = await bcrypt.compare(loginPw, user.loginPw);
    if (!match) {
      return res.status(401).json({
        cause: "pw",
        success: false,
      });
    }
    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "7h",
      }
    );
    return res
      .status(200)
      .json({ success: true, user: { username: user.username }, token });
  } catch (error) {
    console.log(error);
  }
};

exports.Register = async (req, res) => {
  try {
    const { username, loginId, loginPw, createdAt } = req.body;
    const userExists = await User.exists({ loginId }).exec();
    if (userExists) {
      return res.status(409).json({
        cause : "id",
        success : false,
      })
    }
    hashedPassword = await bcrypt.hash(loginPw, 10);
    await User.create({
      username,
      loginId,
      loginPw : hashedPassword,
      createdAt,
    });
    return res.status(200).json({ success : true });
  } catch (error) {
    console.log(error);
  }
};
