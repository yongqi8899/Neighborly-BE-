import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";

export const me = asyncHandler(async (req, res) => {
  const user = await User.findById(req.userId).select("-password");
  res.status(200).json(user);
});

export const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  if (!user) throw new ErrorResponse("User not found", 404);
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new ErrorResponse("Unauthorized", 401);
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.json({ token, user });
  res.status(201).json({ success: "welcome back" });
});

export const signOut = asyncHandler(async (req, res) => {
  res.status(200).json({ success: "goodbye" });
});

export const signUp = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const alreayExists = await User.findOne({ email });
  if (alreayExists) throw new ErrorResponse("User already exists", 400);
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.json(token);
  res.status(201).json({ success: "welcome aboard" });
});
