import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "./IUsersRepository";
import { User } from "../entities/Users";
import e from "express";

class UsersRepositoryInMemory implements IUsersRepository {
    private users: User[] = [];

    async create(data: ICreateUserDTO): Promise<User> {
        const user = new User();
        Object.assign(user, data);
        this.users.push(user);
        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = this.users.find(user => user.email === email);
        return user || null;
    }

    async findById(id: string): Promise<User | null> {
        const user = this.users.find(user => user.id === id);
        return user || null;
    }

    async save(user: User): Promise<void> {
        const index = this.users.findIndex(u => u.id === user.id);
        if (index !== -1) {
            this.users[index] = user;
        }

    }
    async listAll(): Promise<User[]> {
        return this.users;
    }
}

export { UsersRepositoryInMemory };