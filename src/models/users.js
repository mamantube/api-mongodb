import mongoose from "../config/conn.js";

const { Schema, model } = mongoose

const usersSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: string,
        required: true,
    },
    role_id: {
        type: Schema.types.ObjectId,
        ref: "roles",
        required: true,
    }
},  {
    timestamp: true,
    }
)

export default model ("Users", usersSchema);