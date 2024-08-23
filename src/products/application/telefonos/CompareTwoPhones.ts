// application/phones/CompareTwoPhones.ts
import { CompareTwoProducts } from '../common/CompareTwoProducts';
import { ProductsRepository } from '../../domain/productsRepository';

export class CompareTwoPhones extends CompareTwoProducts {
    constructor(productsRepository: ProductsRepository) {
        super(productsRepository);
    }

    async execute(id1: string, id2: string) {
        return super.execute(id1, id2, this.productsRepository.findPhoneById.bind(this.productsRepository));
    }
}