"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");
const eventRoutes = require("./routes/event.routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api", eventRoutes.routes);

app.listen(config.port, () => {
  console.log("server started on http://localhost:" + config.port);
});
