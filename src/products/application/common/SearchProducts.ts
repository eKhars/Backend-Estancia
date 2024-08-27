import { ProductsRepository } from '../../domain/productsRepository';
import { Product } from '../../domain/product';

export class SearchProducts {
    private productsRepository: ProductsRepository;

    constructor(productsRepository: ProductsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(query: string): Promise<Product[]> {
        const tablets = await this.productsRepository.findAllTablets();
        const computers = await this.productsRepository.findAllComputers();
        const phones = await this.productsRepository.findAllPhones();
        const headphones = await this.productsRepository.findAllHeadphones();

        const allProducts = [...tablets, ...computers, ...phones, ...headphones];

        return allProducts.filter(product => 
            product.titulo.toLowerCase().includes(query.toLowerCase()) ||
            (product.marca && product.marca.toLowerCase().includes(query.toLowerCase())) ||
            (product.plataforma && product.plataforma.toLowerCase().includes(query.toLowerCase()))
        );
    }
}