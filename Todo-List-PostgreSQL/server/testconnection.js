// testConnection.js
const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const pool = new Pool({
    user: "postgres",
    password: process.env.PG_PASSWORD,
    host: "localhost",
    port: 5432,
    database: "todos-db",
});

pool.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.error("Connection error", err.stack);
    } else {
        console.log("Connected to the database:", res.rows[0]);
    }
    pool.end();
});