import express, {Router} from "express";
import { getAllAnimais } from "../controllers/animaisController.js";
import { getAnimaisById } from "../controllers/animaisController.js";
const router = express.Router(); 

router.get("/", getAllAnimais);
router.get("/:id", getAnimaisById);

export default router;