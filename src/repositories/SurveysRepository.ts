import { EntityRepository, Repository } from "typeorm";
import { Surveys } from "../models/Surveys";

@EntityRepository(Surveys)
class SurveysRepository extends Repository<Surveys> { }

export { SurveysRepository };
