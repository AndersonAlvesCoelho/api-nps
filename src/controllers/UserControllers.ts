import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

class UserControllers {
    async store(req: Request, res: Response) {

        const { name, email } = req.body;
        const userRepository = getRepository(User);

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

        return res.json(user);
    }
}

export { UserControllers };
