require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.d1icoll.mongodb.net/?appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const petCollection = client.db("mithuDB").collection("petListing");
    const donationCollection = client.db("mithuDB").collection("donation");
    const userCollection = client.db("mithuDB").collection("users"); // users collection

    // JWT + save user
    app.post("/jwt", async (req, res) => {
      const { email, name, photo } = req.body;

      try {
        const existingUser = await userCollection.findOne({ email });

        if (!existingUser) {
          await userCollection.insertOne({
            email,
            name: name || "",
            photo: photo || "",
            createdAt: new Date(),
          });
        }

        const token = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: "1d",
        });

        res.send({ token });
      } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Failed to create JWT / save user" });
      }
    });

    // Get all users
    app.get("/users", async (req, res) => {
      try {
        const users = await userCollection.find().toArray();
        res.send(users);
      } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Failed to fetch users" });
      }
    });

    // Pet Listing
    app.get("/petListing", async (req, res) => {
      const result = await petCollection.find().toArray();
      res.send(result);
    });

    app.get("/petListing/:id", async (req, res) => {
      const id = req.params.id;
      const result = await petCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // Donations
    app.get("/donation", async (req, res) => {
      const result = await donationCollection.find().toArray();
      res.send(result);
    });

    console.log("MongoDB connected successfully!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

// Test route
app.get("/", (req, res) => {
  res.send("mithu Server is running");
});

// Start server
app.listen(port, () => {
  console.log(`mithu Server running on port ${port}`);
});