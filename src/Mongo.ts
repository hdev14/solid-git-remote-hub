import mongoose from 'mongoose';

export default class Mongo {
  private static connection?: typeof mongoose;

  static async connect(uri: string) {
    if (!Mongo.connection) {
      Mongo.connection = await mongoose.connect(uri);
    }
  }
}