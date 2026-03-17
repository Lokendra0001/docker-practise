import dotenv from "dotenv";
import express from "express";
const app = express();

dotenv.config();

console.log(process.env.PORT);
const PORT = process.env.PORT || 3002;

console.log("Docker is Working");

app.get("/", (req, res) => res.send("HELLO FROM SERVER"));

app.listen(PORT, "0.0.0.0", () => console.log("Server Started At Port" + PORT));
