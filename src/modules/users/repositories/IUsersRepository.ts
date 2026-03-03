import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import  { User } from "../entities/Users";

interface IUsersRepository {
    create(data:ICreateUserDTO):Promise<User>;
    findByEmail(email:string):Promise<User | null>;
    findById(id:string):Promise<User | null>;
    listAll():Promise<User[]>;
    save(user:User):Promise<void>;
}

export {IUsersRepository};