import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { sendEmail } from "../utils/sendEmail.js";

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Signup
export const registerUser = async (req, res) => {
  const { full_name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ full_name, email, password });
    // Send welcome email
    await sendEmail({
      to: user.email,
      subject: "Welcome to Our Platform 🎉",
      text: `Hi ${user.full_name}, thanks for registering!`,
    });

    res.status(201).json({
      _id: user._id,
      full_name: user.full_name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        full_name: user.full_name,
        email: user.email,
        token: generateToken(user._id),
      });

      // Send welcome email
      await sendEmail({
        to: user.email,
        subject: "Login Alert",
        html: `
    <h2>Login Alert</h2>
    <p>Hi ${
      user.full_name
    }, you just logged in to your account at ${new Date().toLocaleString()}.</p>
  `,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Logout (frontend should just remove token, backend optional)
export const logoutUser = async (req, res) => {
  res.json({ message: "User logged out" });
};
