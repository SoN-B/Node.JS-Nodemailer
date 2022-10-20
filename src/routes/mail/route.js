"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./service");

router.get("/mail", ctrl.sendmail);

module.exports = router;
