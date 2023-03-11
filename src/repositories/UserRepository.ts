import User from "../entities/User";

export type UserData = {
  username: string;
  name: string;
  addedAt: Date;
}

export default class UserRepository {
  public async create(data: UserData): Promise<User> {
    return Promise.resolve({} as any);
  }

  public async findByUsername(username: string): Promise<User> {
    return Promise.resolve({} as any);
  }

  public async findMany(): Promise<User[]> {
    return Promise.resolve({} as any);
  }
}