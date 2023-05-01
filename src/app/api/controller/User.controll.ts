import { UserService } from '../service/User.service';

import { IUser } from '../db/interface/IUser';

export class UserController {
  private userService = new UserService();

  async insertUser(body: IUser) {
    const userCreated = await this.userService.createUser(body);

    return userCreated;
  }

  async getAllUser() {
    const users = await this.userService.getAllUser();

    return users;
  }

  async getUser(idUser: string) {
    const user = await this.userService.getUserById(idUser);

    return user;
  }
}
