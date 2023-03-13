import axios, { AxiosInstance } from "axios";
import GitRemoteHubError from "./GitRemoteHubError";
import IGitRemoteHub, { UserProfile, UserRepo } from "./IGitRemoteHub";

export default class Github implements IGitRemoteHub {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://api.github.com',
    });
  }

  public async getProfile(criteria: string): Promise<UserProfile | null> {
    try {
      const response = await this.axiosInstance.get(`/users/${criteria}`);

      return response.data;
    } catch (error: any) {
      console.log(error.stack);

      if (error.response && error.response.status === 404) {
        return null;
      }

      throw new GitRemoteHubError();
    }
  }

  public async getProfileRepos(criteria: string): Promise<UserRepo[]> {
    try {
      const response = await this.axiosInstance.get(`/users/${criteria}/repos`);

      return response.data;
    } catch (error: any) {
      console.log(error.stack);

      throw new GitRemoteHubError();
    }

  }
}