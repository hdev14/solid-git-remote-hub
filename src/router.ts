import { Router } from 'express';
import UserController from './controllers/UserController';
import RepoController from './controllers/RepoController';

const router = Router();

const userController = new UserController();
const repoController = new RepoController();

router.post('/users', userController.addProfile.bind(userController));

router.get('/users', userController.getUserProfiles.bind(userController));

router.get('/users/:username', userController.getUserProfile.bind(userController));

router.get('/users/:username/repos', repoController.getUserRepos.bind(repoController));

export default router;