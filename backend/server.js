import express from "express";
import cors from "cors";
import   "dotenv/config"; // Add this line
import connectdb from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";

// Add this line

const app = express();
const port = 4000;


app.use(express.json());
app.use(cors());

connectdb();

app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))



app.get("/", (req, res) => {
    res.send("API Working");
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


