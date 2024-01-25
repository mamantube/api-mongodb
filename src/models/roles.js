// import db from "../config/connection.js";

// export default db.collection("roles");

import mongoose from "../config/conn.js";

const { Schema, model } = mongoose

const rolesSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        
    }  
    }
)

export default model ("Roles", rolesSchema);