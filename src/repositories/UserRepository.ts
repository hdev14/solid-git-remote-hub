import crypto from 'crypto';
import { PrismaClient } from "@prisma/client";
import Database from "../Database";

export type UserData = {
  username: string;
  name: string;
  addedAt: Date;
}

export default class UserRepository {
  private readonly connection: PrismaClient;

  constructor() {
    this.connection = Database.getConnection();
  }

  public async create(data: UserData) {
    const user = await this.connection.user.create({
      data: {
        id: crypto.randomUUID(),
        name: data.name,
        username: data.username,
        addedAt: new Date()
      }
    });

    return user;
  }

  public async findByUsername(username: string) {
    const user = await this.connection.user.findFirst({
      where: { username }
    });

    return user || null;
  }

  public async findMany() {
    const users = await this.connection.user.findMany();

    console.log(users);
    
    return users;
  }
}