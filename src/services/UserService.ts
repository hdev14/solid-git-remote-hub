import Github from "../external/Github";
import UserRepository from "../repositories/UserRepository";

export default class UserService {
  // Aggregation
  constructor(
    private readonly userRepository: UserRepository,
    private readonly github: Github,
  ) {}

  public async addProfile(username: string) {}

  public async getUserProfiles() {}

  public async getUserProfile(username: string) {}
}