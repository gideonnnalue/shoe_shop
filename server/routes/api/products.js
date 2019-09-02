const express = require("express");
const router = express.Router();
const passport = require("passport");
const admin = require("../../middleware/admin");

//Load Product Model
const Product = require("../../models/Product");

// @route   GET api/products/test
// @desc    Test products route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "working" }));

// @route   GET api/products/
// @desc    Get all products route
// @access  Public
router.get("/", (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);
  let findArgs = {};

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === "price") {
        findArgs[key] = {
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1]
        };
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }
  findArgs["publish"] = true;

  Product.find()
    .sort([[sortBy, order, "-createdAt"]])
    .populate("brand")
    .skip(skip)
    .limit(limit)
    .exec()
    .then(products => res.status(200).json({ size: products.length, products }))
    .catch(err => res.json({ noproductsfound: "No products found" }));
});

// @route   POST api/products/add
// @desc    Add new products route
// @access  Private/Admin
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  admin,
  (req, res) => {
    const newProduct = new Product(req.body);

    newProduct
      .save()
      .then(product => {
        res.status(201).json({
          success: true,
          product
        });
      })
      .catch(err => console.log(err));
  }
);

// @route   PUT api/products/edit/:id
// @desc    Edit products route
// @access  Private/Admin
router.put(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  admin,
  (req, res) => {
    Product.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    )
      .then(product => {
        res.status(200).json({ success: true, product });
      })
      .catch(err => res.status(400).json({ success: false, err }));
  }
);

// @route   GEET api/products/product_by_id/:id
// @desc    Get products by id
// @access  Public
router.get("/product_by_id/:id", (req, res) => {
  Product.findOne({ _id: req.params.id })
    .exec()
    .then(product => res.status(200).json({ success: true, product }))
    .catch(err =>
      res
        .status(400)
        .json({ success: false, err, productnotfound: " Product Not Found" })
    );
});

// @route   GET api/products/product_by_purpose
// @desc    Get products by purpose
// @access  Public

// BY ARRIVAL
// /product_by_purpose?sortBy=createdAt&order=desc&limit=4

// BY SELL
// /articles?sortBy=sold&order=desc&limit=4
router.get("/product_by_purpose", (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  let limit = req.query.limit ? parseInt(req.query.limit) : 100;

  Product.find()
    .populate("brand")
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, products) => {
      if (err) return res.status(400).send(err);
      res.send(products);
    });
});

module.exports = router;
