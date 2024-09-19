const express = require("express");
const app = express();
const port = 3000;

const todos = [
    {
        id: 1,
        desc: "Write python",
        completed: false
    },
    {
        id: 2,
        desc: "Write javascript",
        completed: true
    }
];

app.get("/", (req, res, next) => {
    res.send("Todo List Homepage");
});
// Returns JSON from todos
app.get("/todos", (req, res) => {
    res.json(todos);
});
// Returns JSON from one Todo with specific id
app.get("/todos/:id", (req, res) => {
    console.log(req.params.id);
    let todo = todos.filter((todo) => todo.id == req.params.id);
    res.json(todo);
});

app.post("/todos", (req, res) => {
    todos.push()
    res.json([]);
})

app.put("/todos/:id", (req, res) => {
    res.json([]);
})

app.delete("/todos/:id", (req, res) => {
    res.json([]);
})

app.listen(port, () => {
    console.log("app is listening in PORT", port);
});