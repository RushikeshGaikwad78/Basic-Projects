const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();

app.use(express.urlencoded({ extended: false }));

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

//post request
app.post("/users", (req, res) => {
  //todo : create a new user
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success",id:users.length });
  });
});

//patch request
app.patch("/users/:id", (req, res) => {
  //todo : update the user of given id
  return res.json({ status: "pending" });
});

//delete request
app.delete("/users:id", (req, res) => {
  //todo : delete the user with given id
  return res.json({ status: "pending" });
});

app.listen(8000, () => {
  console.log("App listening on port 8000!");
});
