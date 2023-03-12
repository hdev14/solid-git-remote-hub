import Github from "../external/Github";

export default class RepoService {
  // Aggregation
  constructor(private readonly github: Github) {}

  public async getUserRepos(username: string) {
    const repos = await this.github.getProfileRepos(username);

    return repos;
  }
}