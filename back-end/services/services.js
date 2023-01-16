const database = require("../db");

async function getContactsDb() {
  const resultQuery = await database.query("SELECT * FROM list_contacts lc");

  const response = resultQuery.rows;

  return response;
}

async function getOneContactsDb(id) {
  const query = `SELECT * FROM list_contacts WHERE id = ${id}`;

  const resultQuery = await database.query(query);

  const response = resultQuery.rows;

  return response;
}

async function postContactsDb(name, phone, email) {
  await database.query(
    "INSERT INTO list_contacts (name,phone,email) VALUES ($1,$2,$3)",
    [name, phone, email]
  );
}
async function updateContactsDb(name, phone, email, id) {
  const query = `UPDATE list_contacts set name = '${name}', phone = '${phone}', email = '${email}' WHERE id = (${id})`;

  console.log("Query:", query);

  await database.query(query);
}
async function deleteContactsDb(id) {
  await database.query("DELETE FROM list_contacts WHERE id = ($1)", [id]);
}

module.exports = {
  getContactsDb,
  getOneContactsDb,
  postContactsDb,
  updateContactsDb,
  deleteContactsDb,
};
