const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config(); // at the top of your file

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.d1icoll.mongodb.net/?appName=Cluster0`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    await client.connect();

    const petCollection = client.db("mithuDB").collection("petListing")



    app.get("/petListing", async(req,res)=>{
      const result = await petCollection.find().toArray()
      res.send(result)
    })



    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

    // await client.close();
  }
}
run().catch(console.dir);




// test route
app.get("/", (req, res) => {
  res.send("mithu Server is running ");
});

// start server
app.listen(port, () => {
  console.log(`mithu Server running on port ${port}`);
});
