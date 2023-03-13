import IGitRemoteHub, { UserProfile, UserRepo } from "./IGitRemoteHub";

export default class Gitlab implements IGitRemoteHub {
  public async getProfile(criteria: string): Promise<UserProfile | null> {
    throw new Error("Method not implemented.");
  }

  public async getProfileRepos(criteria: string): Promise<UserRepo[]> {
    throw new Error("Method not implemented.");
  }
}