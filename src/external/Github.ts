import axios, { AxiosInstance } from "axios";

export default class Github {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://api.github.com',
    });
  }
  
  public async getProfile(username: string): Promise<any | null> {
    const response = await this.axiosInstance.get(`/users/${username}`);

    return response.data;
  }

  public async getProfileRepos(username: string): Promise<any[]> {
    const response = await this.axiosInstance.get(`/users/${username}/repos`);

    return response.data;
  }
}