const express = require("express");
const cors = require("cors");
const db = require('./database')

const app = express();
app.use(cors());
app.use((request, response, next) => {
  response.header(`Access-Control-Allow-Origin`, `*`);
  response.header(
    `Access-Control-Allow-Headers`,
    `Origin, X-Requested-with, Content-Type, Accept`
  );
  next();
});
app.use(express.json());

app.get("/", (request, response) => response.json("test working"));

app.get("/get_data", (request, response) => {
  db.getRepos( repos => response.json( repos ))
});

app.post("/add", (request, response) => {
  console.log(request.body)
  let {title, status, language} = request.body
  db.addRepo( repos => response.json(repos), title, status, language)
});

app.delete("/delete/:id", (request, response) => {
  db.removeRepo( repos => response.json(repos), request.params.id)
});

app.put("/toggle/:id", (request, response) => {
  db.toggleRepo( repos => response.json(repos), request.params.id)
});

const PORT = 9500;
app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
