import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { welcomeMessage } from "../utils/welcomeMessage.js";

export const registerUser = async ({ name, email, password, profileUrl }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed,
    profileUrl,
  });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  await welcomeMessage(user.email);

  return {
    token,
    user: {
      id: user._id,
      email: user.email,
      name: user.name,
      profileUrl: user.profileUrl,
      role: user.role,
    },
  };
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    const error = new Error("Invalid email");
    error.code = 404;
    throw error;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    const error = new Error("Wrong password");
    error.code = 401;
    throw error;
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return {
    token,
    user: {
      id: user._id,
      email: user.email,
      name: user.name,
      profileUrl: user.profileUrl,
      role: user.role,
    },
  };
};

export const getAllUsers = async () => {
  try {
    const users = await User.find().select("-password"); // Exclude password
    return users;
  } catch (error) {
    console.log(error.message);
    throw new Error("Error fetching users");
  }
};
