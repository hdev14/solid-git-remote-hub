import crypto from 'crypto';
import { PrismaClient } from "@prisma/client";
import Database from "../Database";
import IUserRepository, { UserData } from './IUserRepository';
import User from '../entities/User';

export default class PrismaUserRepository implements IUserRepository {
  private readonly connection: PrismaClient;

  constructor() {
    this.connection = Database.getConnection();
  }

  public async create(data: UserData): Promise<User> {
    const user = await this.connection.user.create({
      data: {
        id: crypto.randomUUID(),
        externalId: data.externalId,
        name: data.name,
        username: data.username,
        addedAt: new Date()
      }
    });

    return new User(user.id, user.externalId, user.name, user.username, user.addedAt);
  }

  public async findByUsername(username: string): Promise<User | null> {
    const user = await this.connection.user.findFirst({
      where: { username }
    });

    if (!user) {
      return null;
    }

    return new User(user.id, user.externalId, user.name, user.username, user.addedAt);
  }

  public async findMany(): Promise<User[]> {
    const users = await this.connection.user.findMany();

    return users.map((u) => new User(u.id, u.externalId, u.name, u.username, u.addedAt));
  }
}