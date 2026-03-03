
import { IUsersRepository } from "../repositories/IUsersRepository";
import { User } from "../entities/Users";

class ListUsersService {
    constructor(private usersRepository: IUsersRepository) { }

    async execute(): Promise<User[]> {
        const users = await this.usersRepository.listAll()
        return users;
    }
}

export { ListUsersService };