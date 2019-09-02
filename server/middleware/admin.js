const mongoose = require("mongoose");

const User = require("../models/User");

module.exports = auth = (req, res, next) => {
  User.findById(req.user._id)
    .then(user => {
      if (user) {
        if (user.role !== 1) {
          return res.status(400).json({ isAdmin: false, error: true });
          //   return res.end("Unauthorized");
        } else {
          next();
        }
      } else {
        throw new Error("Unauthorized");
      }
    })
    .catch(err => console.log(err));
};
