// domain/productsRepository.ts
import { Product } from './product';

export interface ProductsRepository {
    findAllTablets(): Promise<Product[]>;
    findAllComputers(): Promise<Product[]>;
    findAllPhones(): Promise<Product[]>;
    findAllHeadphones(): Promise<Product[]>;
    findTabletById(id: string): Promise<Product | null>;
    findComputerById(id: string): Promise<Product | null>;
    findPhoneById(id: string): Promise<Product | null>;
    findHeadphoneById(id: string): Promise<Product | null>;
}