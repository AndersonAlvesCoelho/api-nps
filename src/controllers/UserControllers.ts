import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import * as yup from "yup";
import { AppError } from "../errors/AppError";

import { UsersRepository } from "../repositories/UsersRepository";

class UserControllers {
    async store(req: Request, res: Response) {
        const { name, email } = req.body;
        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
        })

        try {
            await schema.validate(req.body)
        } catch (err) {
            throw new AppError(err);
        }

        const userRepository = getCustomRepository(UsersRepository);
        const userAlreadyExists = await userRepository.findOne({ email });

        // VERIFICANDO SE JA EXISTEM UM USUARIO COM ESSE E-MAIL
        if (userAlreadyExists) {
            throw new AppError("User already exists");
        }

        //CADASTRANDO USUARIO
        const user = userRepository.create({
            name,
            email
        })

        await userRepository.save(user);

        return res.status(201).json(user);
    }
}

export { UserControllers };