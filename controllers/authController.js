require("dotenv").config();

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../models").Users;

// GET Sign Up
router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

// POST Sign Up
router.post("/", (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return res.status(500).json(err);

    bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
      if (err) return res.status(500).json(err);
      req.body.password = hashedPwd;

      Users.create(req.body)
        .then((newUser) => {
          res.redirect(`/users/${newUser.id}`);
        })
        .catch((err) => {
          const token = jwt.sign(
            {
              userName: foundUser.userName,
              id: foundUser.id,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "30 days",
            }
          );
          console.log("Token:", token);
          res.cookie("jwt", token);
          console.log(err);
          res.send(`err ${err}`);
        });
    });
  });
});

// GET Login
router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

// POST Login
router.post("/login", (req, res) => {
  Users.findOne({
    where: {
      userName: req.body.userName,
    },
  }).then((foundUser) => {
    if (foundUser) {
      bcrypt.compare(req.body.password, foundUser.password, (err, match) => {
        if (match) {
          const token = jwt.sign(
            {
              userName: foundUser.userName,
              id: foundUser.id,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "30 days",
            }
          );
          console.log("Token:", token);
          res.cookie("jwt", token);
          res.redirect(`/users/${foundUser.id}`);
        } else {
          return res.sendStatus(400);
        }
      });
    }
  });
});

module.exports = router;
