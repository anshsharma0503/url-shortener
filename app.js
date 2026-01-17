require("dotenv").config();
const express =require("express");

const connectDb = require("./config/db");

const app = express();

connectDb();

app.use(express.json());

app.get("/" , (req , res) => {
    res.send("URL shortener API is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});