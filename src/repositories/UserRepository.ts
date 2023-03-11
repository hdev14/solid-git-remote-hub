export type UserData = {
  username: string;
  name: string;
  addedAt: Date;
}

export default class UserRepository {
  public async create(data: UserData) {
    return Promise.resolve({} as any);
  }

  public async findByUsername(username: string) {
    return Promise.resolve({} as any);
  }

  public async findMany() {
    return Promise.resolve({} as any);
  }
}