// application/phones/GetAllPhones.ts
import { ProductsRepository } from '../../domain/productsRepository';
import { Product } from '../../domain/product';

export class GetAllPhones {
    private productsRepository: ProductsRepository;

    constructor(productsRepository: ProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(): Promise<Product[]> {
        return await this.productsRepository.findAllPhones();
    }
}