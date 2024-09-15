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
// https://localhost:3000/todos returns json from todos
app.get("/todos", (req, res) =>  {
    res.json(todos);
});

app.listen(() => {
    console.log("app is listening in PORT", port);
});