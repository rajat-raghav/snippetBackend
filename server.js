const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { snippets } = require("./snippet");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send("<h1>Hello there, Server is running</h1>");
});

app.get("/snippet", (req, res) => {
  res.status(200).json(snippets);
});

app.post("/snippet", (req, res) => {
  const { filter } = req.body || { filter: "" };
  res
    .status(200)
    .json(
      snippets.filter((item) =>
        item.title.toLowerCase().includes(filter.toLowerCase())
      )
    );
});

app.listen(port, () => {
  console.log("server is up on http://localhost:", port);
});
