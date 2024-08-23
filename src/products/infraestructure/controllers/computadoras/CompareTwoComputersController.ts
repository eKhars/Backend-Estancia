// infrastructure/controllers/computers/CompareTwoComputersController.ts
import { Request, Response } from 'express';
import { CompareTwoComputers } from '../../../application/computadoras/CompareTwoComputers';

export class CompareTwoComputersController {
    private compareTwoComputers: CompareTwoComputers;

    constructor(compareTwoComputers: CompareTwoComputers) {
        this.compareTwoComputers = compareTwoComputers;
    }

    async handle(req: Request, res: Response): Promise<void> {
        try {
            const { id1, id2 } = req.params;
            const result = await this.compareTwoComputers.execute(id1, id2);
            res.json(result);
        } catch (error) {
            res.status(500).send('Error comparing computers');
        }
    }
}