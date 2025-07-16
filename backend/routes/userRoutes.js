import express from "express";
import {
  register,
  login,
  sendOtpToEmail,
  verifyOtp,
  getAllUsersController,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/otp/send", sendOtpToEmail);
router.post("/otp/verify", verifyOtp);
router.get("/getAllUsers", getAllUsersController);
export default router;
