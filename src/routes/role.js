import express from "express";
import Create from "../controllers/roles/create.post.js"
import listData from "../controllers/roles/listData.get.js"

const router = express.Router();

router.post("/role/new", Create);
router.get("/role/list", listData)

export default router;