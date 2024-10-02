const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./db") // imports database connection pool

dotenv.config(); // loads env variables
const PORT = process.env.PORT; // from .env file

const app = express();

app.use(express.json()); // middleware to parse JSON
app.use(cors()); // adds CORS middleware

app.get('/', (req, res) => {
    res.json({msg: "Home Page"});
});

// Queries database for all todos
app.get("/todos", async (req, res) => {
    try {
        const todos = await pool.query("SELECT * FROM todo_table");
        res.json(todos.rows);
    } catch (error) {
        res.json(error);
    }
});
// Adds todos
app.post("/todos", async (req, res) => {
    try {
        const {desc, completed} = req.body;
        const newTodo = await pool.query("INSERT INTO todo_table (todo_desc, todo_completed) VALUES($1, $2) RETURNING *", [desc, completed]);
        console.log(newTodo);
        res.json({newTodo, msg: "Todo added", success: true});
    } catch (error) {
        res.json(error)
    }
})
// Starts server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`);
});