import { v4 as uuidv4 } from "uuid";

let users = [];
//getting all users
export const getAllUsers = (req, res) => {
  res.send(users);
};

//Adding a user
export const addUser = (req, res) => {
  const newUser = req.body;

  const new_user_res = { id: uuidv4(), ...newUser };
  users.push(new_user_res);
  console.log(new_user_res);
  res.send(new_user_res);
};

//Getting a user
export const getUser = (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log(users);

  const got_user = users.find((user) => user.id == id);
  if (!got_user) {
    return res.status(404).send({ message: "no user with this id" });
  }
  res.send(got_user);
};

//Delete user
export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`user with the id: ${id} has been deleted from the database`);
  console.log(`user with the id: ${id} has been deleted from the database`);
};

//Update a user
export const updateUser = (req, res) => {
  const { id } = req.params;
  const update_user = users.find((user) => user.id == id);

  const { name, lastName, age } = req.body;

  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ message: "Request body cannot be empty" });
  }

  if (name) update_user.name = name;
  if (lastName) update_user.lastName = lastName;
  if (age) update_user.age = age;

  res.send({
    message: "user has been updated",
    updated_user: update_user,
  });
};
