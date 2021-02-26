import { Router } from "express";
import { UserControllers } from "./controllers/UserControllers";
import { SurveysControllers } from "./controllers/SurveysControllers";
import { SendMailControllers } from "./controllers/SendMailControllers";
import { AnswerControllers } from "./controllers/AnswerControllers";
import { NpsControllers } from "./controllers/NpsControllers";

const api = Router();

const userControllers = new UserControllers();
const surveysControllers = new SurveysControllers();
const sendMailControllers = new SendMailControllers();
const answerControllers = new AnswerControllers();
const npsControllers = new NpsControllers();

api.post("/users", userControllers.store);
api.post("/surveys", surveysControllers.store);

api.get("/surveys", surveysControllers.show);
api.post("/sendMail", sendMailControllers.execute);
api.get("/answers/:value", answerControllers.execute);
api.get("/nps/:surveys_id", npsControllers.execute);






export { api };