// application/common/CompareTwoProducts.ts
import { Product } from '../../domain/product';
import { ProductsRepository } from '../../domain/productsRepository';

export class CompareTwoProducts {
    protected productsRepository: ProductsRepository;

    constructor(productsRepository: ProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(id1: string, id2: string, findProductFn: (id: string) => Promise<Product | null>): Promise<{
        product1: Product | null,
        product2: Product | null,
        comparison: string
    }> {
        const product1 = await findProductFn(id1);
        const product2 = await findProductFn(id2);

        let comparison = '';
        if (product1 && product2) {
            const price1 = parseFloat(product1.precio.replace(/[^\d.-]/g, ''));
            const price2 = parseFloat(product2.precio.replace(/[^\d.-]/g, ''));
            const priceDifference = Math.abs(price1 - price2);
            
            comparison = `Diferencia de precio: $${priceDifference.toFixed(2)}. `;
            if (price1 > price2) {
                comparison += `${product1.titulo} es $${priceDifference.toFixed(2)} más caro que ${product2.titulo}.`;
            } else if (price2 > price1) {
                comparison += `${product2.titulo} es $${priceDifference.toFixed(2)} más caro que ${product1.titulo}.`;
            } else {
                comparison += 'Ambos productos tienen el mismo precio.';
            }
        }

        return { product1, product2, comparison };
    }
}