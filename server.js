const express = require("express");
const path = require("path");
var cors = require("cors");
const { urlencoded } = require('express');
const dotenv = require('dotenv')
dotenv.config();

const externalUrl = process.env.RENDER_EXTERNAL_URL;
const port = externalUrl && process.env.PORT ? parseInt(process.env.PORT) : 8888;

const fs = require("fs");
let jsonCars;
fs.readFile("usedcars.json", function (err, data) {
  var jsonData = data;
  jsonCars = JSON.parse(jsonData);
});

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get("/getusedcars", function (req, res) {
  res.json(jsonCars);
});

app.get("*", function (req, res) {
  res.sendFile(path.resolve("public/index.html"))
})

if (externalUrl) {
  const hostname = '127.0.0.1';
  app.listen(port, hostname, () => {
    console.log(`Server locally running at http://${hostname}:${port}/ and from outside on ${externalUrl}`);
  });
}
else {
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });

}
