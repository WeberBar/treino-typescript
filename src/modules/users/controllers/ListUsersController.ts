import { Request, Response } from "express";
import { UsersRepositoryInMemory } from "../repositories/UsersRepositoryInMemory";
import { ListUsersService } from "../service/ListUsersService";
import { User } from "../entities/Users";

class ListUsersController {
    constructor(private usersRepository: UsersRepositoryInMemory) { }
    async handle(req: Request, res: Response): Promise<Response> {
        const listUsersService = new ListUsersService(this.usersRepository);
        const users: User[] = await listUsersService.execute();
        return res.json(users);

        
    }
}
export { ListUsersController };