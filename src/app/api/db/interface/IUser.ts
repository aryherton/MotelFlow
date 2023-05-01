export interface IUser {
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  level?: number;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
