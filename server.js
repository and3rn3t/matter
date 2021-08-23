require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");

// Logging stuff
app.use((req, res, next) => {
	let logStr = `${req.method} ${req.url}`;

	if(Object.keys(req.body).length !== 0) {
		logStr += ` -- DATA: ${JSON.stringify(req.body)}`;
	}

	console.log(logStr);
	next();
});

// const verifyToken = (req, res, next) => {
//   let token = req.cookies.jwt;
//   // COOKIE PARSER GIVES YOU A .cookies PROP, WE NAMED OUR TOKEN jwt
//   console.log("Cookies: ", req.cookies.jwt);

//   jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
//     if (err || !decodedUser) {
//       return res.status(401).json({ error: "Unauthorized Request" });
//     }
//     req.user = decodedUser;
//     // ADDS A .user PROP TO REQ FOR TOKEN USER
//     console.log(decodedUser);

//     next();
//   });
// };

// app.use(cookieParser());

// HOMEPAGE
// app.get("/", (req, res) => {
//   res.render("users/index.ejs");
// });

// app.use("/auth", require("./controllers/authController.js"));
// app.use("/users", verifyToken, require("./controllers/usersController.js"));

// Import controllers
app.use("/users", require("./controllers/usersController.js"));

app.listen(3002, () => {
  console.log("Nodemon listening");
});
