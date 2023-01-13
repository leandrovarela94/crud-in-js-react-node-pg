const database = require("../db");

const getTables = () => database.query("SELECT * FROM list_contacts lc ");

module.exports = getTables;
