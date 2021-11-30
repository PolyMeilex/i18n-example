const express = require("express");
const cors = require("cors");
const readFile = require("fs").readFile;

var app = express();

app.use(cors());

app.get("/lang", (req, res) => {
  let lang = req.query.id;

  // If lang was not set
  if (lang == null) {
    // Try to get if from browser preferences
    lang = req.headers["accept-language"];
  }

  // If we don't suport a lang we just fallback to eng
  if (!(lang === "en" || lang === "pl" || lang === "ru")) {
    lang = "en";
  }

  readFile(`../locales/${lang}.json`, "utf8", (err, file) => {
    res.json(JSON.parse(file));
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
