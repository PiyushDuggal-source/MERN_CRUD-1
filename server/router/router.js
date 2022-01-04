const express = require("express");
const User = require("../models/userModel");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(`REQUEST REACHED AT ${req.path} WITH ${req.method}`);

  User.find().then((result) => {
    res.send(result);
  });
});

router.post("/create", (req, res) => {
  const newUser = new User(req.body);

  newUser
    .save()
    .then((result) => {
      console.log(`${result.name} is saved`);
    })
    .catch((err) => console.log(err));
});

router.patch("/edit/:id", (req, res) => {
  console.log(`REQUEST REACHED AT ${req.path} WITH ${req.method}`);

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body)
    .then((result) => {
      console.log("User is updated");
    })
    .catch((err) => console.log(err));
});

router.get("/edit/:id", (req, res) => {
  console.log(`REQUEST REACHED AT ${req.path} WITH ${req.method}`);
  const id = req.params.id;

  User.findById(id).then((result) => {
    res.json(result);
  });
});

router.delete("/delete/:id", (req, res) => {
  console.log(`REQUEST REACHED AT ${req.path} WITH ${req.method}`);

  const id = req.params.id;
  User.findByIdAndDelete(id)
    .then((result) => {
      console.log(`${result.name} is removed`);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
