import { Request, Response } from "express";
import IRepoService from "../services/IRepoService";

export default class RepoController {
  constructor(private readonly repoService: IRepoService) { }

  public async getRepos(request: Request, response: Response) {
    try {
      const { username } = request.params;
      
      const repos = await this.repoService.getUserRepos(username);

      return response.status(200).json(repos);
    } catch (error: any) {
      console.log(error.stack);
      return response.status(500).json({ message: 'Internal Server Error' });
    }
  }
}