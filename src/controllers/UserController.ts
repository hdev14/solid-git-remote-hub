import { Request, Response } from "express";
import Github from "../external/Github";
import UserRepository from "../repositories/UserRepository";
import ProfileService from "../services/ProfileService";

export default class UserController {
  private readonly profileService: ProfileService;

  constructor() {
    // Composition
    this.profileService = new ProfileService(new UserRepository(), new Github());
  }

  public async addProfile(request: Request, response: Response) {
    try {
      return response.status(204).json();
    } catch (error) {
      return response.status(500).json({ message: 'Server Internal Error' });
    }
  }

  public async getProfiles(request: Request, response: Response) {
    try {
      return response.status(204).json();
    } catch (error) {
      return response.status(500).json({ message: 'Server Internal Error' });
    }
  }

  public async getProfile(request: Request, response: Response) {
    try {
      return response.status(204).json();
    } catch (error) {
      return response.status(500).json({ message: 'Server Internal Error' });
    }
  }
}