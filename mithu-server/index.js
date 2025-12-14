const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("mithu Server is running ");
});

// start server
app.listen(port, () => {
  console.log(`mithu Server running on port ${port}`);
});
