import express, {Router} from "express";
import { getAllPocoes } from "../controllers/pocoesController.js";
import { getPocoesById } from "../controllers/pocoesController.js";

const router = express.Router(); 

router.get("/", getAllPocoes);
router.get("/:id", getPocoesById);

export default router;