// JavaScrip Assincrono
// await async
//fullfilled
import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://gustavo:gustavo10@cluster0.s3bpc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URL);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
