import express, { Application } from 'express';
import userRouter from './routers/userRouter';

export class Server {
  private readonly _application: Application;

  constructor() {
    this._application = express();
    this.setMiddlewares();
    this.setRouters();
  }

  get application() {
    return this._application;
  }

  private setMiddlewares() {
    this._application.use(express.json());
  }

  private setRouters() {
    this._application.use('users', userRouter);
    this._application.use('repos', userRouter);
  }
}

export default new Server();