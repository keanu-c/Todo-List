const {Pool} = require("pg"); // import Pool class from pg module
// Remember to add this!
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
    user: "postgres",
    password: process.env.PG_PASSWORD,
    host: "localhost",
    port: 5432,
    database: "todos-db"
});

// Checks PostgreSQL credentials
// console.log(`Connecting to database with user: ${"postgres"} and password: ${process.env.PG_PASSWORD}`);

module.exports = pool; // export pool instance