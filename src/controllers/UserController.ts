import { Request, Response } from "express";
import Github from "../external/Github";
import UserRepository from "../repositories/UserRepository";
import UserService from "../services/UserService";

export default class UserController {
  private readonly userService: UserService;

  constructor() {
    // Composition
    this.userService = new UserService(new UserRepository(), new Github());
  }

  public async addProfile(request: Request, response: Response) {
    try {
      return response.status(204).json();
    } catch (error) {
      return response.status(500).json({ message: 'Server Internal Error' });
    }
  }

  public async getUserProfiles(request: Request, response: Response) {
    try {
      return response.status(204).json();
    } catch (error) {
      return response.status(500).json({ message: 'Server Internal Error' });
    }
  }

  public async getUserProfile(request: Request, response: Response) {
    try {
      return response.status(204).json();
    } catch (error) {
      return response.status(500).json({ message: 'Server Internal Error' });
    }
  }
}