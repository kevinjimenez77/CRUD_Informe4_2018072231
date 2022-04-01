import {Request, Response} from 'express';

class LoginController {

    public index (req: Request, res: Response) {
        res.send('Login')
    }
}

export const loginController = new LoginController();
export default loginController;