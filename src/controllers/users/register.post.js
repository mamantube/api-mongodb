import userModel from "../../models/users.js";
import Message from "../../utils/message.js";
import Validation from "../../utils/validation.js";
import { z } from "zod";


const schema = {
    email: z.string().min(1, "Email is required").email(),
    password: z.string().min(6, "Password must be equal 6 characters"),
}

/** 
 * @typedef {import("express").Request} ExpressRequest 
 * @typedef {import("express").Response} ExpressResponse 
 */


/**
 * @param {ExpressRequest} req 
 * @param {ExpressResponse} res 
 */

export default async function (req, res) {
    const body = req.body;
    const validation = Validation(schema, body)

    if (!validation.success) return Message(res, 422, "Error validation")
    try {
        Message(res, 201, "Create user succesfully", validation.data);
    } catch (error) {
        Message(res, 500, error.message || "Internal server error")       
    }
}