import { Request, Response } from "express";
import Github from "../external/Github";
import UserRepository from "../repositories/PrismaUserRepository";
import ProfileService from "../services/ProfileService";

export default class UserController {
  private readonly profileService: ProfileService;

  constructor() {
    // Composition
    this.profileService = new ProfileService(new UserRepository(), new Github());
  }

  public async addProfile(request: Request, response: Response) {
    try {
      const { username } = request.body;

      const profile = await this.profileService.addUserProfile(username);

      return response.status(201).json(profile);
    } catch (error: any) {
      console.log(error.stack);

      if (error.message === 'Profile not found') {
        return response.status(404).json({ message: error.message});
      }

      return response.status(500).json({ message: 'Server Internal Error' });
    }
  }

  public async getProfiles(request: Request, response: Response) {
    try {
      const profiles = await this.profileService.getUserProfiles();

      return response.status(200).json(profiles);
    } catch (error: any) {
      console.log(error.stack);
      return response.status(500).json({ message: 'Server Internal Error' });
    }
  }

  public async getProfile(request: Request, response: Response) {
    try {
      const { username } = request.params;

      const profile = await this.profileService.getUserProfile(username);

      return response.status(200).json(profile);
    } catch (error: any) {
      console.log(error.stack);

      if (error.message === 'Profile not found') {
        return response.status(404).json({ message: error.message});
      }

      return response.status(500).json({ message: 'Server Internal Error' });
    }
  }
}