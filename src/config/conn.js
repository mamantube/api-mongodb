import mongoose from "mongoose";

const myDb = users_db;

try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/${myDb}`)
} catch (error) {
    handleError(error);
}

process.on("Error connection", (error) => {
    console.log("Failed connecting to sever", error)
});

export default mongoose;