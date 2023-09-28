import { Router } from "express";
import {getRecords} from "../controllers/record";
const router = Router();
router.get("/registro", getRecords)