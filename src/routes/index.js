const router = require("express").Router();
const path = require("path");
const products = require("./products");

router.use("/products", products);
router.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: path.join(__dirname, "..", "..", "public"),
  });
});

module.exports = router;
