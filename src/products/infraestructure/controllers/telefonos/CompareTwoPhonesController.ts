// infrastructure/controllers/phones/CompareTwoPhonesController.ts
import { Request, Response } from 'express';
import { CompareTwoPhones } from '../../../application/telefonos/CompareTwoPhones';

export class CompareTwoPhonesController {
    private compareTwoPhones: CompareTwoPhones;

    constructor(compareTwoPhones: CompareTwoPhones) {
        this.compareTwoPhones = compareTwoPhones;
    }

    async handle(req: Request, res: Response): Promise<void> {
        try {
            const { id1, id2 } = req.params;
            const result = await this.compareTwoPhones.execute(id1, id2);
            res.json(result);
        } catch (error) {
            res.status(500).send('Error comparing phones');
        }
    }
}