const express = require("express");

const cors = require("cors");

const database = require("../services/services");

const router = express.Router();

router.use(cors());

router.use(express.json());

router.get("/contacts", (req, res) => {
  const promise = database.getContactsDb();

  console.log(promise);
  //{ message: "Sucess, get all contacts" }
  return res.json(promise);
});

router.get("/contacts/:id", (req, res) => {
  const { id } = req.params;

  database.getOneContactsDb(id);

  return res.json({ message: "Sucess, get one contact" });
});

router.post("/contacts", (req, res) => {
  const { name, phone, email } = req.body;

  database.postContactsDb(name, phone, email);

  return res.json({ message: "Contact created" });
});

router.put("/contacts/:id", (req, res) => {
  const { id } = req.params;

  const { name, phone, email } = req.body;

  database.updateContactsDb(name, phone, email, id);

  return res.json({ message: "Contact updated" });
});

router.delete("/contacts/:id", (req, res) => {
  const { id } = req.params;

  database.deleteContactsDb(id);

  return res.json({ message: "Contact deleted " });
});

module.exports = router;
