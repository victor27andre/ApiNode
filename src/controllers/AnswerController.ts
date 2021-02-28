import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppErro";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";


class AnswerController {

    async execute (request: Request, response: Response){
        const {value} = request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        });

        if(!surveyUser){
            throw new AppError("Survey User does not exists");
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser);
    }
}

export {AnswerController}

/* http://localhost:3333/answers/1?u=5d32219d-5eaa-41b2-9e9f-e94dee17b71b */