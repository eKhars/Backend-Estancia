// infrastructure/controllers/tablets/CompareTwoTabletsController.ts
import { Request, Response } from 'express';
import { CompareTwoTablets } from '../../../application/tablets/CompareTwoTablets';

export class CompareTwoTabletsController {
    private compareTwoTablets: CompareTwoTablets;

    constructor(compareTwoTablets: CompareTwoTablets) {
        this.compareTwoTablets = compareTwoTablets;
    }

    async handle(req: Request, res: Response): Promise<void> {
        try {
            const { id1, id2 } = req.params;
            const result = await this.compareTwoTablets.execute(id1, id2);
            res.json(result);
        } catch (error) {
            res.status(500).send('Error comparing tablets');
        }
    }
}