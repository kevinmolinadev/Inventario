import { Router } from "express";
import { getUsers, newUser, getUser, getUserByName} from "../controllers/users";
const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.get('/users/name/:name', getUserByName);
router.post('/users', newUser);


export default router;