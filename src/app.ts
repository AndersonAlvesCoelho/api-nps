import "reflect-metadata";
import express from 'express';
import createConnection from "./database";
import { api } from "./routes";

createConnection();
const app = express();

app.use(express.json());
app.use(api);

export { app };
