import RequestMongo from '../db/models/RequestMongo.model';
import { IUser } from '../db/interface/IUser';

export class UserService {
  public async createUser(user: IUser): Promise<unknown> {
    const userCreated = await RequestMongo.insert('user', user);
    return userCreated;
  }

  public async getAllUser(): Promise<IUser[]> {
    const users = await RequestMongo.find('user', {});
    return users as IUser[];
  }

  public async getUserById(id: string): Promise<IUser> {
    const user = await RequestMongo.findOne('user', { _id: id });
    console.log('::::::::::::::::::::::::::::::::', user);
    return user as IUser;
  }

  public async updateUser(user: IUser): Promise<void> {
    await RequestMongo.update('user', { _id: user._id }, user);
  }
}
