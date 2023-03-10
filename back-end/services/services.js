const database = require("../db");

async function getContactsDb() {
  const query = "SELECT * FROM list_contacts lc ;";

  const resultQuery = await database.query(query);

  const response = resultQuery.rows;

  return response;
}

async function getOneContactsDb(id) {
  const query = `SELECT * FROM list_contacts WHERE id = ${id} ;`;

  const resultQuery = await database.query(query);

  const response = resultQuery.rows;

  return response;
}

async function postContactsDb(name, phone, email) {
  const query = `INSERT INTO list_contacts (name,phone,email) VALUES ('${name}','${phone}','${email}');`;

  await database.query(query);
}

async function updateContactsDb(name, phone, email, id) {
  const query = `UPDATE list_contacts set name = '${name}', phone = '${phone}', email = '${email}' WHERE id = (${id});`;

  await database.query(query);
}

async function deleteContactsDb(id) {
  const query = `DELETE FROM list_contacts WHERE id = ${id} ;`;
  await database.query(query);
}

module.exports = {
  getContactsDb,
  getOneContactsDb,
  postContactsDb,
  updateContactsDb,
  deleteContactsDb,
};
