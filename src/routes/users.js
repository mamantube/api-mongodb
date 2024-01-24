import express from "express";
import Register from "../controllers/users/register.post.js";

const router = express.Router();

router.post("/user/register", Register);

export default router;