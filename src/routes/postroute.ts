import { Router } from 'express';

import postController from '../controllers/postcontroller';

class PostRoute {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', postController.list );
        this.router.post('/', postController.create);
        this.router.delete('/:id',postController.delete);
        this.router.put('/:id',postController.edit);
        this.router.get('/:id',postController.getOne);
    }
}

const postroute = new PostRoute();
export default postroute.router;