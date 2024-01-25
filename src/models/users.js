import mongoose from "../config/conn.js";

const { Schema, model } = mongoose

const usersSchema = new Schema(
    {
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
            ref: "Roles",
            required: true,
        },
        deleted_at : {
            type: Date,
            default: null,
        }
    },  
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        },
    }
)

export default model ("Users", usersSchema);