import Github from "../external/Github";
import UserRepository from "../repositories/UserRepository";

export default class RepoService {
  // Aggregation
  constructor(
    private readonly userRepository: UserRepository,
    private readonly github: Github
  ) { }

  public async getUserRepos(username: string) {
    const user = await this.userRepository.findByUsername(username);
    
    if (!user) {
      return [];
    }

    const repos = await this.github.getProfileRepos(username);

    return repos;
  }
}