/* ICI EX DE BASE

import { Request, Response } from 'express';
import ObjetServices from '../services/ObjetServices';


class ObjetControllers {
    private objetServices = new ObjetServices();
    async getAll(req: Request, res: Response) {
        const objet = await this.objetServices.getAll();
        res.send({ satus: 'ok', data: objet });
    }
 };

export default ObjetControllers;
*/