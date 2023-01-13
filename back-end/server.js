const express = require("express");

const cors = require("cors");

const database = require("./db.js");

const server = express();

server.use(express.json());

server.use(cors());

const contacts = database;

server.get("/contacts", (req, res) => {
  return res.json(contacts.pool);
});

server.get("/contacts/:id", (req, res) => {
  const { id } = request.params;

  const contact = contacts.find((contact) => contact.id === id);
  console.log(contact);

  return res.json(contact);
});

server.post("/contacts", (req, res) => {
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

server.put("/contacts/:id", (req, res) => {
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

server.delete("/contacts/:id", (req, res) => {
  const { id } = req.params;

  const response = contacts.findIndex(
    (contact) => contact.id.toString() === id
  );

  contacts.splice(response, 1);

  return res.json({ message: "Contact Deleted " });
});

server.listen(5200);
