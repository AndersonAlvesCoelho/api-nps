import { Router } from "express";
import { UserControllers } from "./controllers/UserControllers";
import { SurveysControllers } from "./controllers/SurveysControllers";
import { SendMailControllers } from "./controllers/SendMailControllers";

const api = Router();

const userControllers = new UserControllers();
const surveysControllers = new SurveysControllers();
const sendMailControllers = new SendMailControllers();

api.post("/users", userControllers.store);
api.post("/surveys", surveysControllers.store);
api.get("/surveys", surveysControllers.show);
api.post("/sendMail", sendMailControllers.execute);


export { api };