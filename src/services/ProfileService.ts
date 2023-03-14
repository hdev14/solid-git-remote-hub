import User from "../entities/User";
import IGitRemoteHub, { UserProfile } from "../external/IGitRemoteHub";
import IUserRepository from "../repositories/IUserRepository";
import IProfileService from "./IProfileService";
import ProfileNotFoundError from "./ProfileNotFoundError";

export default class ProfileService implements IProfileService {
  // Aggregation
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly gitRemoteHub: IGitRemoteHub,
  ) {}

  public async addUserProfile(username: string): Promise<User> {
    const profile = await this.gitRemoteHub.getProfile(username);

    if (!profile) {
      throw new ProfileNotFoundError();
    }

    const userProfile = await this.userRepository.create({
      externalId: profile.id.toString(),
      username: profile.username,
      name: profile.name,
      addedAt: new Date(),
    });

    return userProfile;
  }

  public async getUserProfiles(): Promise<User[]> {
    const userProfiles = await this.userRepository.findMany();

    return userProfiles;
  }

  public async getUserProfile(username: string):  Promise<User>{
    const userProfile = await this.userRepository.findByUsername(username);

    if (!userProfile) {
      throw new ProfileNotFoundError();
    }

    return userProfile;
  }
}