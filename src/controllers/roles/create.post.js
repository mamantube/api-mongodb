import db from "../../config/connection.js"
import Message from "../../utils/message.js";

/** 
 * @typedef {import("express").Request} ExpressRequest 
 * @typedef {import("express").Response} ExpressResponse 
 */


/**
 * @param {ExpressRequest} req 
 * @param {ExpressResponse} res 
 */

export default function(req, res) {
    const result = db.collection("roles").find();

    Message(res, 200, "All data", result);
};