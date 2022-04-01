import {Request, Response} from 'express';

class IndexController {

    public index (req: Request, res: Response) {
        res.send('Hola perros')
    }
}

export const indexController = new IndexController();