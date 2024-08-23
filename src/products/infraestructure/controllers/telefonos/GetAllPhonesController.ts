// infrastructure/controllers/phones/GetAllPhonesController.ts
import { Request, Response } from 'express';
import { GetAllPhones } from '../../../application/telefonos/GetAllPhones';

export class GetAllPhonesController {
    private getAllPhones: GetAllPhones;

    constructor(getAllPhones: GetAllPhones) {
        this.getAllPhones = getAllPhones;
    }

    async handle(req: Request, res: Response): Promise<void> {
        try {
            const phones = await this.getAllPhones.execute();
            res.json(phones);
        } catch (error) {
            res.status(500).send('Error retrieving phones');
        }
    }
}