const {Pool} = required("pg");

const pool = new Pool({
    user: "postgres",
    password: process.env.PG_PASSWORD,
    host: "localhost",
    port: 5432,
    database: "todos-db",
});

module.exports = pool;


