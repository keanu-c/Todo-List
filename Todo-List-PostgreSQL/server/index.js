const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT; // from .env file

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({msg: "Home Page"});
});

app.get("/todos", async (req, res) => {
    try {
        res.json({msg: "Home Page"});
    } catch (error) {
        res.json(error);
    }
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`);
});