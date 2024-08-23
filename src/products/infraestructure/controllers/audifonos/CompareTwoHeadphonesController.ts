// infrastructure/controllers/headphones/CompareTwoHeadphonesController.ts
import { Request, Response } from 'express';
import { CompareTwoHeadphones } from '../../../application/audifonos/CompareTwoHeadphones';

export class CompareTwoHeadphonesController {
    private compareTwoHeadphones: CompareTwoHeadphones;

    constructor(compareTwoHeadphones: CompareTwoHeadphones) {
        this.compareTwoHeadphones = compareTwoHeadphones;
    }

    async handle(req: Request, res: Response): Promise<void> {
        try {
            const { id1, id2 } = req.params;
            const result = await this.compareTwoHeadphones.execute(id1, id2);
            res.json(result);
        } catch (error) {
            res.status(500).send('Error comparing headphones');
        }
    }
}