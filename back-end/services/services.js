const database = require("../db");

async function getContactsDb() {
  const resultQuery = await database.query("SELECT * FROM list_contacts lc");

  const response = resultQuery.rows;

  return response;
}

async function getOneContactsDb(id) {
  const resultQuery = await database.query(
    "SELECT id = ($1) FROM list_contacts ",
    [id]
  );

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
  await database.query(
    `UPDATE list_contacts set name = ${name}, phone = ${phone}, email = ${email} WHERE id = (${id})`
  );
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
