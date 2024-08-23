// infrastructure/controllers/headphones/GetAllHeadphonesController.ts
import { Request, Response } from 'express';
import { GetAllHeadphones } from '../../../application/audifonos/GetAllHeadphones';

export class GetAllHeadphonesController {
    private getAllHeadphones: GetAllHeadphones;

    constructor(getAllHeadphones: GetAllHeadphones) {
        this.getAllHeadphones = getAllHeadphones;
    }

    async handle(req: Request, res: Response): Promise<void> {
        try {
            const headphones = await this.getAllHeadphones.execute();
            res.json(headphones);
        } catch (error) {
            res.status(500).send('Error retrieving headphones');
        }
    }
}