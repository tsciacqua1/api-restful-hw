const express = require("express");
const morgan = require("morgan");
const path = require("path");
const routes = require("./routes");
require("dotenv").config();

const { PORT } = process.env;

const port = PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", routes);

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(500).send({ error: true, error: err.message });
};

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server on port ${port}`);
});
