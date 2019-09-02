const express = require("express");
const router = express.Router();
const passport = require("passport");
const admin = require("../../middleware/admin");

// Load Brand model
const Brand = require("../../models/Brand");

// @route   GET api/users/test
// @desc    Test users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "working" }));

// @route   GET api/brands
// @desc    Get all brands
// @access  Public
router.get("/", (req, res) => {
  Brand.find()
    .exec()
    .then(brand => {
      res.status(200).json({
        brand
      });
    })
    .catch(err => console.log(err));
});

// @route   POST api/brands/new
// @desc    Add new brand
// @access  Private/Admin
router.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  admin,
  (req, res) => {
    Brand.findOne({ name: req.body.name }).then(brand => {
      if (brand) return res.status(400).json({ msg: "Brand already exists" });
      const newBrand = new Brand({ name: req.body.name });
      newBrand.save().then(doc => res.send(doc));
    });
  }
);

// @route   PUT api/brands/edit/:id
// @desc    Edit brand
// @access  Private/Admin
router.put(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  admin,
  (req, res) => {
    Brand.findOneAndUpdate(
      { _id: req.params.id },
      { name: req.body.name },
      { new: true }
    )
      .then(brand => {
        return res.send(brand);
      })
      .catch(err => console.log(err));
  }
);

// @route   DELET api/brands/delete
// @desc    Delete brand
// @access  Private/Admin
router.delete(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  admin,
  (req, res) => {
    Brand.findByIdAndDelete(req.body.id)
      .then(doc => {
        res.status(200).json({ success: true });
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
