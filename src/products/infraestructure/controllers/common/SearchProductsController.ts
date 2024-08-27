import { Request, Response } from 'express';
import { SearchProducts } from '../../../application/common/SearchProducts';

export class SearchProductsController {
    private searchProducts: SearchProducts;

    constructor(searchProducts: SearchProducts) {
        this.searchProducts = searchProducts;
    }

    async handle(req: Request, res: Response): Promise<void> {
        try {
            const query = req.query.q as string;
            if (!query) {
                res.status(400).json({ error: 'Query parameter is required' });
                return;
            }
            const products = await this.searchProducts.execute(query);
            res.json(products);
        } catch (error) {
            console.error('Error searching products:', error);
            res.status(500).json({ error: 'Error searching products' });
        }
    }
}