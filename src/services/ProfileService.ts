import Github from "../external/Github";
import UserRepository from "../repositories/UserRepository";

export default class ProfileService {
  // Aggregation
  constructor(
    private readonly userRepository: UserRepository,
    private readonly github: Github,
  ) {}

  public async addUserProfile(username: string) {}

  public async getUserProfiles() {}

  public async getUserProfile(username: string) {}
}