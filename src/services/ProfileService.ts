import Github from "../external/Github";
import UserRepository from "../repositories/PrismaUserRepository";

export default class ProfileService {
  // Aggregation
  constructor(
    private readonly userRepository: UserRepository,
    private readonly github: Github,
  ) {}

  public async addUserProfile(username: string) {
    const profile = await this.github.getProfile(username);

    const userProfile = await this.userRepository.create({
      username: profile.login,
      name: profile.name,
      addedAt: new Date(),
    });

    return userProfile;
  }

  public async getUserProfiles() {
    const profiles = await this.userRepository.findMany();

    return profiles;
  }

  public async getUserProfile(username: string) {
    const profile = await this.userRepository.findByUsername(username);

    if (!profile) {
      throw new Error('Profile not found');
    }

    return profile;
  }
}