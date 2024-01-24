import express from "express";
import Create from "../controllers/roles/create.post.js";
import listData from "../controllers/roles/listData.get.js";
import Detail from "../controllers/roles/detail.get.js";
import Update from "../controllers//roles/update.put.js";
import Remove from "../controllers/roles/remove.delete.js";

const router = express.Router();

router.post("/role/new", Create);
router.get("/role/list", listData);
router.get("/role/:_id", Detail);
router.put("/role/:_id", Update);
router.delete("/role/:_id", Remove);

export default router;