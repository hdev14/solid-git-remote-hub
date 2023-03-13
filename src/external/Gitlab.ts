import axios, { AxiosInstance } from "axios";
import GitRemoteHubError from "./GitRemoteHubError";
import IGitRemoteHub, { UserProfile, UserRepo } from "./IGitRemoteHub";

export default class Gitlab implements IGitRemoteHub {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://gitlab.com/api/v4',
    });
  }

  public async getProfile(criteria: string): Promise<UserProfile | null> {
    try {
      const response = await this.axiosInstance.get(`/users?username=${criteria}`);

      if (response.data.length === 0) {
        return null;
      }

      return {
        name: response.data[0].name,
        username: response.data[0].username,
      };
    } catch (error: any) {
      console.log(error.stack);

      throw new GitRemoteHubError();
    }
  }

  public async getProfileRepos(criteria: string): Promise<UserRepo[]> {
    try {
      const response = await this.axiosInstance.get(`/users/${criteria}/projects`);

      return response.data.map((repo: any) => ({
        name: repo.name,
        link: repo.web_url,
      }));
    } catch (error: any) {
      console.log(error.stack);

      throw new GitRemoteHubError();
    }
  }
}