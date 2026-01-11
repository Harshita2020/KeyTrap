import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import Counter from "./models/Counter.js"
dotenv.config()

// const Counter = require("./models/Counter");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.port || 4000;
const URL = `http://localhost:${PORT}/`;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Mongo error:", err));

app.get("/api/rickroll/count", async (req, res) => {
  let counter = await Counter.findOne();

  if (!counter) {
    counter = await Counter.create({ count: 0 });
  }

  res.json({ count: counter.count });
});

app.post("/api/rickroll", async (req, res) => {
  let counter = await Counter.findOne();

  if (!counter) {
    counter = await Counter.create({ count: 1 });
  } else {
    counter.count++;
    await counter.save();
  }

  res.json({ count: counter.count });
});

app.listen(PORT, () => console.log(`Local: ${URL} ,Server running on ${PORT}`));
