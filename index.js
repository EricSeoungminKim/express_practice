const express = require("express");
const app = express();

// CORS helps to avoid CORS errors in the browser console
// when making requests to the server
var cors = require("cors");
app.use(cors());

// TIMER EXAMPLE
// setTimeout(() => {
//   console.log("5 seconds passed");
// }, 5000);

app.get("/", function (req, res) {
  res.send("Hello World");
});

// QUERY EXAMPLE
// app.get("/user/:id", function (req, res) {
//   const q = req.query;
//   console.log(q.q);
//   console.log(q.name);
//   console.log(q.age);
//   res.json("User : " + q.id);
// });

// PARAMS EXAMPLE
app.get("/user/:id", function (req, res) {
  const p = req.params;
  console.log(p.id);

  res.json("User : " + p.id);
});

// Sound Example
app.get("/sound/:name", function (req, res) {
  const p = req.params;
  console.log(p.name);
  switch (p.name) {
    case "cat":
      p.animalSound = "Meow";
      console.log(p.animalSound);
      res.json("Animal Sound : " + p.animalSound);
      break;
    case "dog":
      p.animalSound = "Woof";
      console.log(p.animalSound);
      res.json("Animal Sound : " + p.animalSound);
      break;
    case "cow":
      p.animalSound = "Moo";
      console.log(p.animalSound);
      res.json("Animal Sound : " + p.animalSound);
      break;
    default:
      p.animalSound = "No Sound";
      console.log(p.animalSound);
      res.json("Animal Sound : " + p.animalSound);
  }
});

app.listen(3000);
