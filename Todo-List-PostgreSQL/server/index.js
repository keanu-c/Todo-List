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

// Starts server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`);
});

// GET all todos
app.get("/todos", async (req, res) => {
    try {
        const todos = await pool.query("SELECT * FROM todo_table");
        res.json(todos.rows);
    } catch (error) {
        res.json(error);
    }
});
// GET todo with specific id
app.get("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM todo_table WHERE todo_id = $1", [id]);
        res.json(todo.rows);
    } catch (error) {
        res.json(error);
    }
});
// UPDATE todo
app.put("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {desc, completed} = req.body;
        const todo = await pool.query("UPDATE todo_table SET todo_desc = $1, todo_completed = $2 WHERE todo_id = $3", [desc, completed, id]);
        res.json({msg: "Todo updated", success: true});
    } catch (error) {
        res.json(error);
    }
});
// DELETE todo with specific id
/*
app.delete("/todos/:id", async (req, res) => {
    try {
        const todo = await pool.query("SELECT * FROM todo_table");
        res.json(todos.rows);
    } catch (error) {
        res.json(error);
    }
});
// DELETE all todos
app.delete("/todos", async (req, res) => {
    try {
        const todo = await pool.query("SELECT * FROM todo_table");
        res.json(todos.rows);
    } catch (error) {
        res.json(error);
    }
});
*/
// Add todos
app.post("/todos", async (req, res) => {
    try {
        const {desc, completed} = req.body;
        const newTodo = await pool.query("INSERT INTO todo_table (todo_desc, todo_completed) VALUES($1, $2) RETURNING *", [desc, completed]);
        console.log(newTodo);
        res.json({newTodo, msg: "Todo added", success: true});
    } catch (error) {
        res.json(error)
    }
});