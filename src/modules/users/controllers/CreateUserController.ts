import { Request,Response } from "express";
import { UsersRepositoryInMemory } from "../repositories/UsersRepositoryInMemory";
import { CreateUserService } from "../service/CreateUserService";


class CreateUserController {
    async handle(req: Request, res: Response, usersRepository: UsersRepositoryInMemory): Promise<Response> {
        const { name, email, role, password_hash, active } = req.body;
        const createUserService = new CreateUserService(usersRepository);

        try {
            const user = await createUserService.execute({
                name,
                email,
                role,
                password_hash,
                active
            });
            return res.status(201).json(user);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { CreateUserController };