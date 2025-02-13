import { users } from "../database/user-data";
import { Request, RequestHandler, Response } from "express";

export const register: RequestHandler = (req: Request, res: Response) => {
  const { name, password, email } = req.body;

  const findUserName = users.find((user) => user.name === name);
  if (findUserName) {
    res.send({ data: findUserName, message: "iim nertei hereglegch bna" });
    return;
  }
  const findUserEmail = users.find((user) => user.email === email);
  if (findUserEmail) {
    res.send({
      data: findUserEmail,
      message: "burtgeltei gmail account baina",
    });
    return;
  }
  const lastUser = users[users.length - 1];
  let newUser = req.body;
  newUser._id = lastUser?._id ? Number(lastUser._id) + 1 : 1;
  newUser._id.toString();
  newUser.roler = "customer";
  newUser.createAt = new Date();
  newUser.updateAt = new Date();
  users.push(newUser);
  res.send(users);
};
export const loginstep: RequestHandler = (req: Request, res: Response) => {
  const { name, password, email } = req.body;
  const userName = users.find((user) => user.name === name);
  if (!userName) {
    res.send("boldgue");
  } else if (userName.password !== password) {
    res.send("password buruu");
  }
  res.send(userName);
};
export const profilelogin: RequestHandler = (req: Request, res: Response) => {
  const id = req.params.id;
  const user = users.find((user) => user._id == id);
  res.send(user);
};
export const profileEdit: RequestHandler = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const user = users.find((user) => user._id == id);
  if (user) {
    user.name = name;
  }
  res.send(user);
};
