const express = require("express");

const cors = require("cors");

const database = require("../services/services");

const router = express.Router();

router.use(cors());

router.use(express.json());

router.get("/contacts", async (req, res) => {
  const response = await database.getContactsDb();

  return res.json(response);
});

router.get("/contacts/:id", async (req, res) => {
  const { id } = req.params;

  const response = await database.getOneContactsDb(id);

  return res.json(response);
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
