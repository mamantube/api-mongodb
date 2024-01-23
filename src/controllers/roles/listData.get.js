import rolesModel from "../../models/roles.js"
import Message from "../../utils/message.js"

/** 
 * @typedef {import("express").Request} ExpressRequest 
 * @typedef {import("express").Response} ExpressResponse 
 */


/**
 * @param {ExpressRequest} req 
 * @param {ExpressResponse} res 
 */

export default function (req, res) {
    const data = rolesModel.find().toArray()

    Message(res, 200, "All data", data)
}