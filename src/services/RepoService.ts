import Github from "../external/Github";
import IGitRemoteHub from "../external/IGitRemoteHub";
import IRepoService from "./IRepoService";

export default class RepoService implements IRepoService {
  // Aggregation
  constructor(private readonly gitRemoteHub: IGitRemoteHub) {}

  public async getUserRepos(username: string) {
    const repos = await this.gitRemoteHub.getProfileRepos(username);

    return repos;
  }
}