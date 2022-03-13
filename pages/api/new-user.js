import {MongoClient} from "mongodb"

async function handler(req, res) {
    if (req.method === "POST") {
        if (req.method === "POST") {
            const data = req.body;
        
            const client = await MongoClient.connect(
              "mongodb+srv://Jeneevan31:rKKAQgxczj4YuZ3x@cluster0.um6ax.mongodb.net/blog?retryWrites=true&w=majority"
            );
            const db = client.db();
        
            const userCollection = db.collection("User");
        
            const result = await userCollection.insertOne(data);
        
            console.log(result);
        
            client.close();
        
            res.status(201).json({ message: "User Added!" });
          }

    }
    if (req.method === "GET") {

    }
}
 
  export default handler;
  