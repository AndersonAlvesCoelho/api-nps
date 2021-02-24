import { Router } from "express";
import { UserControllers } from "./controllers/UserControllers";
import { SurveysControllers } from "./controllers/SurveysControllers";

const api = Router();

const userControllers = new UserControllers();
const surveysControllers = new SurveysControllers();

api.post("/users", userControllers.store);
api.post("/surveys", surveysControllers.store);
api.get("/surveys", surveysControllers.show);


export { api };