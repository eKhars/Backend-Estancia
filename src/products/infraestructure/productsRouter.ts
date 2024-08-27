// infrastructure/ProductsRouter.ts
import { Router } from 'express';
import { GetAllTabletsController } from './controllers/tablets/GetAllTabletsController';
import { GetAllComputersController } from './controllers/computadoras/GetAllComputersController';
import { GetAllPhonesController } from './controllers/telefonos/GetAllPhonesController';
import { GetAllHeadphonesController } from './controllers/audifonos/GetAllHeadphonesController';
import { CompareTwoTabletsController } from './controllers/tablets/CompareTwoTabletsController';
import { CompareTwoComputersController } from './controllers/computadoras/CompareTwoComputersController';
import { CompareTwoPhonesController } from './controllers/telefonos/CompareTwoPhonesController';
import { CompareTwoHeadphonesController } from './controllers/audifonos/CompareTwoHeadphonesController';
import { SearchProductsController } from './controllers/common/SearchProductsController';
import dependencies from './dependencies';

const router = Router();

const getAllTabletsController = new GetAllTabletsController(dependencies.getAllTablets);
const getAllComputersController = new GetAllComputersController(dependencies.getAllComputers);
const getAllPhonesController = new GetAllPhonesController(dependencies.getAllPhones);
const getAllHeadphonesController = new GetAllHeadphonesController(dependencies.getAllHeadphones);

const compareTwoTabletsController = new CompareTwoTabletsController(dependencies.compareTwoTablets);
const compareTwoComputersController = new CompareTwoComputersController(dependencies.compareTwoComputers);
const compareTwoPhonesController = new CompareTwoPhonesController(dependencies.compareTwoPhones);
const compareTwoHeadphonesController = new CompareTwoHeadphonesController(dependencies.compareTwoHeadphones);

const searchProductsController = new SearchProductsController(dependencies.searchProducts);

router.get('/tablets', (req, res) => getAllTabletsController.handle(req, res));
router.get('/computers', (req, res) => getAllComputersController.handle(req, res));
router.get('/phones', (req, res) => getAllPhonesController.handle(req, res));
router.get('/headphones', (req, res) => getAllHeadphonesController.handle(req, res));

router.get('/tablets/compare/:id1/:id2', (req, res) => compareTwoTabletsController.handle(req, res));
router.get('/computers/compare/:id1/:id2', (req, res) => compareTwoComputersController.handle(req, res));
router.get('/phones/compare/:id1/:id2', (req, res) => compareTwoPhonesController.handle(req, res));
router.get('/headphones/compare/:id1/:id2', (req, res) => compareTwoHeadphonesController.handle(req, res));

router.get('/search', (req, res) => searchProductsController.handle(req, res));

export default router;