import {Request, Response} from 'express';

import pool from '../datebase';

class PostController {

    public list (req: Request, res: Response) {
        res.json(pool.query('SELECT * FROM publicacion'));
    }

    public create (req: Request, res: Response) {
        pool.query('INSERT INTO publicacion set ?', [req.body]);
        res.json({message: 'created post'});
    }

    public delete (req: Request, res: Response) {
        res.json({text: 'deleting post ' + req.params.id});
    }

    public edit (req: Request, res: Response) {
        res.json({text: 'editing post '+ req.params.id});
    }

    public getOne (req: Request, res: Response) {
        res.json({text: 'This is post '+ req.params.id});
    }
}

export const postController = new PostController();
export default postController;