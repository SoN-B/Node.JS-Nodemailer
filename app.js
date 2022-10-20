"use strict";

// 모듈 선언
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const config = require("config");

// 웹세팅
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 라우팅
// app.use("/", require("./src/routes/test"));

// 연결
app.listen(config.get("server.port"), () => {
    // 서버 연결, Port = 5000
    console.log(`Server Running on ${config.get("server.port")} Port!`);
});
