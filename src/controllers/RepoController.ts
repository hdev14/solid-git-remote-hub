import { Request, Response } from "express";
import Github from "../external/Github";
import RepoService from "../services/RepoService";

export default class RepoController {
  private readonly repoService: RepoService;

  constructor() {
    // Composition
    this.repoService = new RepoService(new Github());
  }

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