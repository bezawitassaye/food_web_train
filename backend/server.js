import express from "express";
import cors from "cors";
import   "dotenv/config"; // Add this line
import connectdb from "./config/db.js";

// Add this line

const app = express();
const port = 4000;
connectdb();

app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
    res.send("API Working");
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


