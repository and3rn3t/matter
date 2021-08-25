const express = require("express");
const router = express.Router();

// Import models
const Posts = require("../models").Posts;
const Users = require("../models").Users;

// GET Index
router.get("/", (req, res) => {
  Posts.findAll().then((post) => {
    res.render("posts/index.ejs", {
      posts: post,
    });
  });
});

// GET New Post
router.get("/new", (req, res) => {
  res.render("posts/new.ejs");
});

// POST New Post
router.post("/", (req, res) => {
  Posts.create(req.body).then((newPost) => {
    res.redirect("/posts");
  });
});

// GET Current Post
router.get("/:id", (req, res) => {
  Posts.findByPk(req.params.id, {
    include: [
      {
        model: Users,
        attributes: ["userName"],
      },
    ],
  }).then((post) => {
    res.render("posts/show.ejs", {
      posts: post,
    });
  });
});

// GET Current Post (Edit)
router.get("/edit/:id", (req, res) => {
  Posts.findByPk(req.params.id).then((post) => {
    res.render("posts/edit.ejs", {
      posts: post,
    });
  });
});

// PUT Profile (Edit)
router.put("/:id", (req, res) => {
  Posts.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((post) => {
    res.redirect("/posts");
  });
});

// Delete Profile
router.delete("/:id", (req, res) => {
  Posts.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/posts");
  });
});

module.exports = router;
