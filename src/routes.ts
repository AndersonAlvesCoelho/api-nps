import { Router } from "express";
import { UserControllers } from "./controllers/UserControllers";

const userControllers = new UserControllers();


const api = Router();

api.post("/users", userControllers.store);


export { api };