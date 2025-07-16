import {Request, Response} from 'express';
import {FipeOutputPort} from '../../ports/output/FipeOutputPort';

export class FipeUseCase {
    constructor(private readonly FipeProvider: FipeOutputPort) {
    }

    async execute(req: Request, res: Response): Promise<any> {
        return this.FipeProvider.action(req, res);
    }
}
