import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utlils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
    // next(errorHandler(500, "message handler function"));
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    !validUser && next(errorHandler(404, "User not exist"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    !validPassword && next(errorHandler(401, "Incorrect Credentials"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_TOKEN);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
