import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from express!" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on PORT: " + PORT);
});
