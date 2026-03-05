
import express from 'express';
import '../typeorm';
import { CreateUserController } from '../../../modules/users/controllers/CreateUserController';
import { ListUsersController } from '../../../modules/users/controllers/ListUsersController';
import { UsersRepositoryInMemory } from '../../../modules/users/repositories/UsersRepositoryInMemory';
const app = express();
CreateUserController
app.use(express.json());

const usersRepository = new UsersRepositoryInMemory();
const createUserController = new CreateUserController();
const listUsersController = new ListUsersController(usersRepository);
app.post('/users', (req, res) => createUserController.handle(req, res, usersRepository));
app.get('/users', (req, res) => listUsersController.handle(req, res));
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3333, () => {
  console.log('Server is running on port 3333');
}   );