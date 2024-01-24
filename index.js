import express from "express";
import cors from "cors";
import roleRoutes from "./src/routes/role.js";
import userRoutes from "./src/routes/users.js";


const app = express()

app.use(cors())

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ limit: "1mb", extended: true }));


app.use("/api/v1", roleRoutes);
app.use("/api/v2", userRoutes);
app.listen(3000, () => console.log("Service running on http://localhost:3000"));

