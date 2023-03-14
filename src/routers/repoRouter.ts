import { Router } from 'express';
import RepoController from '../controllers/RepoController';
import Github from '../external/Github';
import Gitlab from '../external/Gitlab';
import MongoUserRepository from '../repositories/MongoUserRepository';
import PrismaUserRepository from '../repositories/PrismaUserRepository';
import RepoService from '../services/RepoService';

const router = Router();
const repoController = new RepoController(new RepoService(new PrismaUserRepository(), new Github()));
// const repoController = new RepoController(new RepoService(new PrismaUserRepository(), new Gitlab()));
// const repoController = new RepoController(new RepoService(new MongoUserRepository(), new Github()));
// const repoController = new RepoController(new RepoService(new MongoUserRepository(), new Gitlab()));

router.get('/:username', repoController.getRepos.bind(repoController));

export default router;