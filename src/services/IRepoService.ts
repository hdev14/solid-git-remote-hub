import { UserRepo } from "../external/IGitRemoteHub";

interface IRepoService {
  getUserRepos(username: string): Promise<UserRepo[]>
}

export default IRepoService;