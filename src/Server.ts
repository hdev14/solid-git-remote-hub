import express, { Application } from 'express';
import router from './router';

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
    this._application.use(router);
  }
}

export default new Server();