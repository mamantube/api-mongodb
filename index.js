import express from "express";
import cors from "cors";
import roleRoutes from "./src/routes/role.js";

const app = express()

app.use(cors())

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ limit: "1mb", extended: true }));


app.use("/api/v1", roleRoutes)
app.listen(3000, () => console.log("Service running on http://localhost:3000"));

