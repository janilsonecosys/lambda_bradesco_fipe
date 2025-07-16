import {Request, Response} from 'express';
import {FipeUseCase} from '../../application/use-cases/FipeUseCase';

export class FipeController {
    constructor(private readonly FipeUseCase: FipeUseCase) {
    }

    async handle(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.FipeUseCase.execute(req, res);
            res.json(result);
        } catch (error: any) {
            res.status(500).json({error: error.message});
        }
    }
}
