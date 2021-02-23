import {Request, Response} from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

class UserController {
    async create(request: Request, response: Response){
        // Fazendo a desistruturação
        const { name, email} = request.body;

        const usersRepository = getRepository(User);

        // Select * from Users where email = "email"
        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists) {
            return response.status(400).json({
                erro: "User already exist!"
            });
        }

        const user = usersRepository.create({
            name, 
            email
        });

        await usersRepository.save(user);

        return response.json(user);
    }
}

export { UserController };