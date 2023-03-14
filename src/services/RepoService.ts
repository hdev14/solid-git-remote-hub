import Github from "../external/Github";
import IGitRemoteHub from "../external/IGitRemoteHub";
import IUserRepository from "../repositories/IUserRepository";
import IRepoService from "./IRepoService";

export default class RepoService implements IRepoService {
  // Aggregation
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly gitRemoteHub: IGitRemoteHub
  ) {}

  public async getUserRepos(username: string) {
    const user = await this.userRepository.findByUsername(username);
    
    if (!user) {
      return [];
    }

    const repos = await this.gitRemoteHub.getProfileRepos(username);

    return repos;
  }
}