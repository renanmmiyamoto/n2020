import { Router } from "express";
import { uuid } from "uuidv4";

import User from "../models/User";

const userRoutes = Router();

const users: User[] = [];

userRoutes.get("/", (req, res) => {
  return res.json({ message: "hello world" });
});

userRoutes.post("/", (req, res) => {
  console.log(req.body);

  const { name, cell, password, avatar } = req.body;

  const user = new User(name, cell, password, avatar);

  users.push(user);

  console.log({ user });

  return res.json({ user });
});

export default userRoutes;
