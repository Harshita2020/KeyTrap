const express = require("express");  //import express framework- toolkit to build backend
const cors = require("cors");        // To let client and server talk

const app = express();
app.use(cors());   //activates cors permission
app.use(express.json());

let count = 0; //in memory database

app.get("/api/rickroll/count", (req, res) => {   //API
  res.json({ count });
});

app.post("/api/rickroll", (req, res) => {
  count++;
  res.json({ count });
});

app.listen(5000, () => console.log("Server running on 5000"));   //This starts the backend server on port 5000.
