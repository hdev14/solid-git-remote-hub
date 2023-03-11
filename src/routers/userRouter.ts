import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

const userController = new UserController();

router.post('/profiles', userController.addProfile.bind(userController));

router.get('/profiles', userController.getProfiles.bind(userController));

router.get('/profiles/:username', userController.getProfile.bind(userController));

export default router;