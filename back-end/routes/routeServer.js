const express = require("express");

const database = require("../services/services");

const cors = require("cors");

const router = express.Router();

router.use(cors());

router.use(express.json());

router.get("/contacts", (req, res) => {
  const response = database.getContactsDb();

  return res.status(200).json(response);
});

router.get("/contacts/:id", (req, res) => {
  const { id } = req.params;

  const idFinal = parseInt(id);

  const response = database.getOneContactsDb(idFinal);

  return res.status(200).json(response);
});

router.post("/contacts", (req, res) => {
  const { name, phone, email } = req.body;

  database.postContactsDb(name, phone, email);

  return res.status(200).json({ message: "Contact created" });
});

router.put("/contacts/:id", (req, res) => {
  const { id } = req.params;

  const { name, phone, email } = req.body;

  database.updateContactsDb(name, phone, email, id);

  return res.status(200).json({ message: "Contact updated" });
});

router.delete("/contacts/:id", (req, res) => {
  const { id } = req.params;

  database.deleteContactsDb(id);

  return res.status(200).json({ message: "Contact deleted " });
});

module.exports = router;
