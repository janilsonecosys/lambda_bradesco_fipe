import {Request, Response} from 'express';

export interface FipeOutputPort {
    action(req: Request, res: Response): Promise<any>;
}
