import { Request, Response } from "express";
import Github from "../external/Github";
import RepoService from "../services/RepoService";

export default class RepoController {
  private readonly repoService: RepoService;

  constructor() {
    // Composition
    this.repoService = new RepoService(new Github());
  }

  public async getUserRepos(request: Request, response: Response) {
    try {
      return response.status(204).json();
    } catch (error) {
      return response.status(500).json({ message: 'Internal Server Error' });
    }
  }
}