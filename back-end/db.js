const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "contacts",
  password: "custelinha",
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected in database the varelinha");
  }
});
