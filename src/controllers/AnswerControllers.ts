
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';

import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';

class AnswerControllers {

    // http://localhost:3333/answers/4?u=60c70143-9544-4c97-ae31-18c4d3c8b170
    /*
    * Routes Params => Parametro que compõe  a rota / valores depois do /
    api.get("answers/:values")
    * Query params => busca, paginação, não obrigatorio
    */
    async execute(req: Request, res: Response) {
        const { value } = req.params;
        const { u } = req.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u),
        });

        if (!surveyUser) {
            throw new AppError("Survey user does not exists");
        }

        surveyUser.value = Number(value);
        await surveysUsersRepository.save(surveyUser);
        return res.json(surveyUser);
    }
}
export { AnswerControllers };