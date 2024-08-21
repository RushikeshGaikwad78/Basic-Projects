const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();

//routes

//getting all users
app.get("/users", (req, res) => {
  return res.json(users);
});

//dynamic path parameters
//:id -> dynamic parameter
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.listen(8000, () => {
  console.log("App listening on port 8000!");
});
