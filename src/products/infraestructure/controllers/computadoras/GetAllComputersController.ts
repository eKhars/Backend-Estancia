// infrastructure/controllers/computers/GetAllComputersController.ts
import { Request, Response } from 'express';
import { GetAllComputers } from '../../../application/computadoras/GetAllComputers';

export class GetAllComputersController {
    private getAllComputers: GetAllComputers;

    constructor(getAllComputers: GetAllComputers) {
        this.getAllComputers = getAllComputers;
    }

    async handle(req: Request, res: Response): Promise<void> {
        try {
            const computers = await this.getAllComputers.execute();
            res.json(computers);
        } catch (error) {
            res.status(500).send('Error retrieving computers');
        }
    }
}