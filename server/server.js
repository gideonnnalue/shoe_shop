const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.get("/", (req, res) => res.send("working"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
