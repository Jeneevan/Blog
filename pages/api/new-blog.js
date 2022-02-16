import { MongoClient } from "mongodb";

// /api/new-blog
// POST /api/new-blog

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Jeneevan31:2666NDEOkUeLt306@cluster0.um6ax.mongodb.net/blog?retryWrites=true&w=majority"
    );
    const db = client.db();

    const blogCollection = db.collection("blog");

    const result = await blogCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Blog Posted!" });
  }
  if (req.method === "GET") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Jeneevan31:2666NDEOkUeLt306@cluster0.um6ax.mongodb.net/blog?retryWrites=true&w=majority"
    );
    const db = client.db();

    const blogCollection = db.collection("blog");

    const posts = await blogCollection.find({}).toArray();

    client.close();

    res.status(200).json(posts);
  }
}
export default handler;
