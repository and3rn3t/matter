const express = require("express");
const router = express.Router();

const Users = require("../models").Users;
// const Groups = require("../models").Groups;
// const Friendships = require("../models").Friendships;
// const Posts = require("..models").Posts;

// Index route
router.get("/", (req, res) => {
  Users.findAll().then((user) => {
    res.render("users/index.ejs", {
      users: user,
    });
  });
});

// GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
  console.log(req.user);
  Users.findByPk(req.params.id).then((userProfile) => {
    res.render("users/profile.ejs", {
      user: userProfile,
    });
  });
});

module.exports = router;
