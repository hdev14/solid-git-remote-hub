import { Router } from 'express';
import RepoController from '../controllers/RepoController';
import Gitlab from '../external/Gitlab';
import RepoService from '../services/RepoService';

const router = Router();
// const repoController = new RepoController(new RepoService(new Github));
const repoController = new RepoController(new RepoService(new Gitlab()));

router.get('/:criteria', repoController.getRepos.bind(repoController));

export default router;