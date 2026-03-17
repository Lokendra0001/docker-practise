import dotenv from "dotenv";
import express from "express";
const app = express();

dotenv.config();

console.log(process.env.PORT);
const PORT = process.env.PORT || 3000;

console.log("Docker is Working");

app.listen(PORT, () => console.log("Server Started At Port" + PORT));
