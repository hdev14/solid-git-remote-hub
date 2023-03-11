import { Router } from 'express';
import RepoController from '../controllers/RepoController';

const router = Router();
const repoController = new RepoController();

router.get('/:username', repoController.getRepos.bind(repoController));

export default router;