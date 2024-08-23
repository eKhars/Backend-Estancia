// infrastructure/controllers/tablets/GetAllTabletsController.ts
import { Request, Response } from 'express';
import { GetAllTablets } from '../../../application/tablets/GetAllTablets';

export class GetAllTabletsController {
    private getAllTablets: GetAllTablets;

    constructor(getAllTablets: GetAllTablets) {
        this.getAllTablets = getAllTablets;
    }

    async handle(req: Request, res: Response): Promise<void> {
        try {
            const tablets = await this.getAllTablets.execute();
            res.json(tablets);
        } catch (error) {
            res.status(500).send('Error retrieving tablets');
        }
    }
}
