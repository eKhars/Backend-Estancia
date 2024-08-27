// infrastructure/dependencies.ts
import { ProductRepositoryMongoose } from './productRepositoryMongoose';
import { GetAllTablets } from '../application/tablets/GetAllTablets';
import { GetAllComputers } from '../application/computadoras/GetAllComputers';
import { GetAllPhones } from '../application/telefonos/GetAllPhones';
import { GetAllHeadphones } from '../application/audifonos/GetAllHeadphones';
import { CompareTwoTablets } from '../application/tablets/CompareTwoTablets';
import { CompareTwoComputers } from '../application/computadoras/CompareTwoComputers';
import { CompareTwoPhones } from '../application/telefonos/CompareTwoPhones';
import { CompareTwoHeadphones } from '../application/audifonos/CompareTwoHeadphones';
import { SearchProducts } from '../application/common/SearchProducts';

const productRepository = new ProductRepositoryMongoose();

const getAllTablets = new GetAllTablets(productRepository);
const getAllComputers = new GetAllComputers(productRepository);
const getAllPhones = new GetAllPhones(productRepository);
const getAllHeadphones = new GetAllHeadphones(productRepository);

const compareTwoTablets = new CompareTwoTablets(productRepository);
const compareTwoComputers = new CompareTwoComputers(productRepository);
const compareTwoPhones = new CompareTwoPhones(productRepository);
const compareTwoHeadphones = new CompareTwoHeadphones(productRepository);

const searchProducts = new SearchProducts(productRepository);

export default {
    getAllTablets,
    getAllComputers,
    getAllPhones,
    getAllHeadphones,
    compareTwoTablets,
    compareTwoComputers,
    compareTwoPhones,
    compareTwoHeadphones,
    searchProducts,
};