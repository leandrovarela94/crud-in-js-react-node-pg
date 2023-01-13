const express = require("express");

const cors = require("cors");

const get = require(".services");

const router = express.Router();

router.use(cors());

router.use(express.json());

router.get("/contacts", (req, res) => {
  return res.json(get);
});

router.get("/contacts/:id", (req, res) => {
  const { id } = request.params;

  const contact = contacts.find((contact) => contact.id === id);

  return res.json({ message: "Create" });
});

router.post("/contacts", (req, res) => {
  const { id, name, phone, email } = req.body;

  const newContact = {
    id,
    name,
    phone,
    email,
  };
  contacts.push(newContact);

  return res.json({ message: "Contact created" });
});

router.put("/contacts/:id", (req, res) => {
  const { id } = req.params;

  const { name, phone, email } = req.body;

  const contactIndex = contacts.findIndex(
    (contact) => contact.id.toString() === id
  );

  contacts[contactIndex] = {
    ...contacts[contactIndex],
    name: name,
    phone: phone,
    email: email,
  };

  return res.json({ message: "Contact updated" });
});

router.delete("/contacts/:id", (req, res) => {
  const { id } = req.params;

  const response = contacts.findIndex(
    (contact) => contact.id.toString() === id
  );

  contacts.splice(response, 1);

  return res.json({ message: "Contact Deleted " });
});

module.exports = router;
