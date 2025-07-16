import express from "express";
import {
  register,
  login,
  sendOtpToEmail,
  verifyOtp,
  getAllUsersController,
  makeAdminController,
  deleteUserController,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/otp/send", sendOtpToEmail);
router.post("/otp/verify", verifyOtp);
router.get("/getAllUsers", getAllUsersController);
router.put("/make-admin/:id", makeAdminController);
router.delete("/delete/:id", deleteUserController);

export default router;
