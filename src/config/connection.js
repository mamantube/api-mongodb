import { MongoClient } from "mongodb";


const client = new MongoClient("mongodb://localhost:27017");


try {
    await client.connect();
    console.log("Connected successfully to sever");
} catch (error) {
    console.log("Failed connecting to server", error);
}

const dbName = "db_learning"

const db = client.db(dbName);

export default db;
