import express from "express";
import Create from "../controllers/roles/create.post.js"

const router = express.Router();

router.post("/role/new", Create)

export default router;