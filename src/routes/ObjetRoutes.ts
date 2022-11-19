/* ICI EX DE BASE

import { Router } from "express";
import ObjetControllers from "../controllers/ObjetControllers";

const objetduRouter = Router();
const objetControllers = new ObjetControllers();

objetduRouter.get('/', (req, res) => { 
    objetControllers.getAll(req, res);
});

export default objetduRouter;
*/