import crypto from 'crypto';
import User from '../entities/User';
import Mongo from '../Mongo';
import IUserRepository, { UserData } from './IUserRepository';
import UserModel from './UserModel';

export default class MongoUserRepository implements IUserRepository {
  constructor() {
    Mongo.connect('mongodb://test:test@localhost:27017');
  }

  public async create(data: UserData): Promise<User> {
    const user = await UserModel.create({
      _id: crypto.randomUUID(),
      externalId: data.externalId,
      name: data.name,
      username: data.username,
      addedAt: new Date()
    });

    return new User(user._id, user.externalId, user.name, user.username, user.addedAt);
  }

  public async findByUsername(username: string): Promise<User | null> {
    const user = await UserModel.findOne({ username });

    if (!user) {
      return null;
    }

    return new User(user._id, user.externalId, user.name, user.username, user.addedAt);
  }

  public async findMany(): Promise<User[]> {
    const users = await UserModel.find({});

    return users.map((u) => new User(u.id, u.externalId, u.name, u.username, u.addedAt));
  }
}