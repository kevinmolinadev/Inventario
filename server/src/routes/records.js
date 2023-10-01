import { Router } from "express";
import {getAllRecords, newRecords} from "../controllers/records";
const router = Router();
router.get("/records", getAllRecords)
router.post("/records", newRecords)
export default router;