import { Router } from 'express';

import loginController from '../controllers/logincontroller';

class LoginRoute {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', loginController.index );
    }
}

const loginroute = new LoginRoute();
export default loginroute.router;