const database = require("../db");

async function getContactsDb() {
  const resultQuery = database.query("SELECT * FROM list_contacts lc");

  return resultQuery.rows;
}

async function getOneContactsDb(id) {
  const resultQuery = await database.query(
    "SELECT id = ($1) FROM list_contacts ",
    [id]
  );
  return resultQuery.rows;
}

async function postContactsDb(name, phone, email) {
  await database.query(
    "INSERT INTO list_contacts (name,phone,email) VALUES ($1,$2,$3)",
    [name, phone, email]
  );
}
async function updateContactsDb(name, phone, email, id) {
  await database.query(
    "UPDATE list_contacts set (name,phone,email) VALUES ($1,$2,$3) WHERE id = ($4)",
    [name, phone, email, id]
  );
}
async function deleteContactsDb() {
  await database.query("DELETE FROM list_contacts WHERE id = ($1)", [id]);
}

module.exports = {
  getContactsDb,
  getOneContactsDb,
  postContactsDb,
  updateContactsDb,
  deleteContactsDb,
};
