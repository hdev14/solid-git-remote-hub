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

      return {
        id: response.data.id,
        name: response.data.name,
        username: response.data.login,
      };
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

      return response.data.map((repo: any) => ({
        name: repo.name,
        link: repo.html_url,
      }));
    } catch (error: any) {
      console.log(error.stack);

      throw new GitRemoteHubError();
    }
  }
}