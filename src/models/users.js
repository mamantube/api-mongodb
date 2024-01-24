import mongoose from "../config/conn.js";

const { Schema, model } = mongoose

const usersSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role_id: {
        type: Schema.Types.ObjectId,
        ref: "roles",
        required: true,
    },
    deleted_at : {
        type: Date,
        default: null,
    }
},  {
    timestamp: true,
    }
)

export default model ("Users", usersSchema);