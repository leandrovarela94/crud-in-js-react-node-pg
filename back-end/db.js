const { Client } = require("pg");

const db = new Client({
  user: "postgres",
  host: "localhost",
  database: "contacts",
  password: "custelinha",
  port: 5432,
});

db.connect((err) => {
  console.log("connected in database the varelinha");
});

module.exports = db;
