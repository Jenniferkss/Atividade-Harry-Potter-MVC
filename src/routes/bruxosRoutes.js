import express, {Router} from "express";
import { getAllBruxos } from "../controllers/bruxosController.js";
import { getBruxosById } from "../controllers/bruxosController.js";
const router = express.Router(); 

router.get("/", getAllBruxos);
router.get("/:id", getBruxosById);

export default router;