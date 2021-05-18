const express = require("express");
const app = express();

const routers = require("./routers");

const SERVER_PORT = 8080;

const setupStart = () => {
  routers(app);

  return {
    start: () => {
      app.listen(SERVER_PORT);
    },
  };
};

module.exports = setupStart;
