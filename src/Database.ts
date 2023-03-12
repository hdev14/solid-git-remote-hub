import { PrismaClient } from "@prisma/client";

// Singleton
export default class Database {
  private static connection?: PrismaClient;

  private constructor() {
    Database.connection = new PrismaClient();
  }

  static getConnection() {
    if (Database.connection) {
      return Database.connection;
    }

    new Database();

    return Database.connection!;
  }
}