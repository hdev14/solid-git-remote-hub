import mongoose from 'mongoose';

export default class Mongo {
  private static connection?: typeof mongoose;

  static connect(uri: string) {
    if (!Mongo.connection) {
      mongoose.connect(uri).then((connection) => {
        Mongo.connection = connection;
      }).catch(console.error.bind(console));
    }
  }
}