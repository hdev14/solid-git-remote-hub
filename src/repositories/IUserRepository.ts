import User from "../entities/User";

export type UserData = {
  username: string;
  name: string;
  addedAt: Date;
}

interface IUserRepository {
  create(data: UserData): Promise<User>;
  findByUsername(username: string): Promise<User | null>;
  findMany(): Promise<User[]>;
}

export default IUserRepository;