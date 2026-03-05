import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { User } from "../entities/Users";

class CreateUserService {
    
    constructor(private usersRepository: IUsersRepository) { }

    async execute(data: ICreateUserDTO): Promise<User> {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error("Usuario já existe");
        }

        const user = await this.usersRepository.create(data);

        return user;
    }
}

export { CreateUserService };