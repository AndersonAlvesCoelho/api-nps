
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { resolve } from "path";

import { SurveysRepository } from '../repositories/SurveysRepository';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';
import { UsersRepository } from '../repositories/UsersRepository';
import SendMailService from '../services/SendMailService';
import { AppError } from '../errors/AppError';

class SendMailControllers {
    async execute(req: Request, res: Response) {
        const { email, surveys_id } = req.body;

        const usersRepository = getCustomRepository(UsersRepository);
        const surveysRepository = getCustomRepository(SurveysRepository);
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);


        const user = await usersRepository.findOne({ email });
        if (!user) {
            throw new AppError("User does not exists");
        }

        const survey = await surveysRepository.findOne({ id: surveys_id });

        if (!survey) {
            throw new AppError("Surveys does not exists");
        }
        
        const surveysUserAlreadyExists = await surveysUsersRepository.findOne({
            where: [{ users_id: user.id},{ value: null }],
            // where: { users_id: user.id, value: null },
            relations: ["users", "surveys"],
        });
        

        const npsPath = resolve(__dirname, "..", "views", "emails", "npsEmail.hbs");
        const variables = {
            name: user.name,
            title: survey.title,
            description: survey.description,
            id: "",
            user_id: user.id,
            link: process.env.URL_MAIL
        }

        if (surveysUserAlreadyExists) {
            variables.id = surveysUserAlreadyExists.id
            await SendMailService.execute(email, survey.title, variables, npsPath);
            return res.json(surveysUserAlreadyExists);
        }

        const surveysUser = surveysUsersRepository.create({
            users_id: user.id,
            surveys_id
        })

        await surveysUsersRepository.save(surveysUser);

        variables.id = surveysUser.id;

        await SendMailService.execute(email, survey.title, variables, npsPath);

        return res.json(surveysUser);
    }
}

export { SendMailControllers };