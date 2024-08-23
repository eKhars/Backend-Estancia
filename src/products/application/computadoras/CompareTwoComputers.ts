// application/computers/CompareTwoComputers.ts
import { CompareTwoProducts } from '../common/CompareTwoProducts';
import { ProductsRepository } from '../../domain/productsRepository';

export class CompareTwoComputers extends CompareTwoProducts {
    constructor(productsRepository: ProductsRepository) {
        super(productsRepository);
    }

    async execute(id1: string, id2: string) {
        return super.execute(id1, id2, this.productsRepository.findComputerById.bind(this.productsRepository));
    }
}