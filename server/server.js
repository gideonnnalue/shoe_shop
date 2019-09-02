const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");

const morgan = require("morgan");
require("dotenv").config();

// Load routes;
const users = require("./routes/api/users");
const brands = require("./routes/api/brands");
const products = require("./routes/api/products");

const app = express();

// Body parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(morgan("dev"));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./middleware/passport")(passport);

app.get("/", (req, res) => res.send("working"));

app.use("/api/users", users);
app.use("/api/brands", brands);
app.use("/api/products", products);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
