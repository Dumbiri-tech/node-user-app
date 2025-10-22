import express from "express";

import {
  getAllUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser,
} from "../Controllers/user.js";

const router = express.Router();

router.get("/", getAllUsers);

router.post("/", addUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);
export default router;
