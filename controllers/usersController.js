const express = require("express");
const router = express.Router();

const Users = require("../models").Users;
// const Groups = require("../models").Groups;
// const Friendships = require("../models").Friendships;
// const Posts = require("..models").Posts;

// GET Index route
router.get("/", (req, res) => {
  Users.findAll().then((user) => {
    res.render("users/index.ejs", {
      users: user,
    });
  });
});

// GET Signup Route
router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

// Signup POST route
router.post("/", (req, res) => {
  Users.create(req.body).then((newUser) => {
    res.redirect("/users");
  });
});

// GET Friend Profile
router.get("/:id", (req, res) => {
  console.log(req.user);
  Users.findByPk(req.params.id).then((userProfile) => {
    res.render("users/show.ejs", {
      user: userProfile,
    });
  });
});

// GET Own Profile (Edit)
router.get("/edit/:id", (req, res) => {
  console.log(req.user);
  Users.findByPk(req.params.id).then((userProfile) => {
    res.render("users/profile.ejs", {
      user: userProfile,
    });
  });
});

// PUT Own Profile Route (Edit)
router.put("/:id", (req, res) => {
  Users.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((user) => {
    res.redirect("/users");
  });
});

// (Works) Delete User Profile Route
router.delete("/:id", (req, res) => {
  Users.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/users");
  });
});

module.exports = router;
