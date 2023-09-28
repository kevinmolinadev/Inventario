import { Router } from "express";
import { getUsers, newUser, getUser, deleteUser, updateUser } from "../controllers/users.controller";
const router = Router();

router.get('/users', getUsers);


export default router;