const express = require("express");
const cors = require("cors");
const request = require("request");

const app = express();
app.use(cors());

app.use(function(req, res, next) {
  // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const queryId = (name, cb) => {
  request(
    `https://api.spoonacular.com/recipes/search?query=${name}??apiKey=deda485a137b4c54ab61db8a5fed4c49`,
    (err, res, body) => {
      if (!err) {
        console.log(body);
      }
    }
  );
};

app.get("/recipeId", (req, res) => {
  console.log(req.query.name);
  const food = req.query.name;
  queryId(food);
});

app.listen(3000, () => console.log("listen on port 3000"));
