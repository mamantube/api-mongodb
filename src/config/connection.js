import { MongoClient } from "mongodb";


const client = new MongoClient("mongodb://localhost:27017");

const dbName = "db_learning"

try {
    await client.connect();
    console.log("Connected successfully to sever");
} catch (error) {
    console.log("Failed connecting to server", error);
} finally {
    client.close();
}


const db = client.db(dbName);

export default db;
