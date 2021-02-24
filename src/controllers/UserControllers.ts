import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UserControllers {
    async store(req: Request, res: Response) {

        const { name, email } = req.body;
        const userRepository = getCustomRepository(UsersRepository);

        const userAlreadyExists = await userRepository.findOne({ email });

        // VERIFICANDO SE JA EXISTEM UM USUARIO COM ESSE E-MAIL
        if (userAlreadyExists) {
            return res.status(400).json({ error: "User already exists!" });
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