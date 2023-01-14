const express = require("express");

const database = require("../db");

const cors = require("cors");

const router = express.Router();

router.use(cors());

router.use(express.json());

router.get("/contacts", (req, res) => {
  async function getContactsDb() {
    const resultQuery = await database.query({
      rowMode: "object",
      text: "SELECT * FROM list_contacts lc",
    });
    console.log(resultQuery.rows);

    return resultQuery.rows;
  }
  return res.json(getContactsDb());
});

router.get("/contacts/:id", (req, res) => {
  const { id } = req.params;

  const x = parseInt(id);

  async function getOneContactsDb() {
    const resultQuery = await database.query(
      "SELECT id = ($1) FROM list_contacts ",
      [x]
    );

    return resultQuery.rows;
  }

  return res.json(getOneContactsDb());
});

router.post("/contacts", (req, res) => {
  const { name, phone, email } = req.body;

  async function postContactsDb() {
    await database.query(
      "INSERT INTO list_contacts (name,phone,email) VALUES ($1,$2,$3)",
      [name, phone, email]
    );
  }
  postContactsDb();
  return res.json({ message: "Contact created" });
});

router.put("/contacts/:id", (req, res) => {
  const { id } = req.params;

  const { name, phone, email } = req.body;

  async function updateContactsDb() {
    await database.query(
      "UPDATE list_contacts set (name,phone,email) VALUES ($1,$2,$3) WHERE id = ($4)",
      [name, phone, email, id]
    );
  }
  updateContactsDb();
  return res.json({ message: "Contact updated" });
});

router.delete("/contacts/:id", (req, res) => {
  const { id } = req.params;

  async function deleteContactsDb() {
    await database.query("DELETE FROM list_contacts WHERE id = ($1)", [id]);
  }
  deleteContactsDb();
  return res.json({ message: "Contact Deleted " });
});

module.exports = router;
