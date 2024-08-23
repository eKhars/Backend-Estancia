// infrastructure/ProductRepositoryMongoose.ts
import { ProductsRepository } from '../domain/productsRepository';
import { Product } from '../domain/product';
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    titulo: String,
    marca: String,
    precio: String,
    envio: String,
    calificacion: Number,
    imagen: String,
    plataforma: String,
    categoria: String,
});

const TabletModel = mongoose.model<Product & mongoose.Document>('Tablet', ProductSchema, 'Tablets');
const ComputerModel = mongoose.model<Product & mongoose.Document>('Computer', ProductSchema, 'Computadoras');
const PhoneModel = mongoose.model<Product & mongoose.Document>('Phone', ProductSchema, 'Telefonos');
const HeadphoneModel = mongoose.model<Product & mongoose.Document>('Headphone', ProductSchema, 'Audifonos');

export class ProductRepositoryMongoose implements ProductsRepository {
    async findAllTablets(): Promise<Product[]> {
        return await TabletModel.find().exec();
    }

    async findAllComputers(): Promise<Product[]> {
        return await ComputerModel.find().exec();
    }

    async findAllPhones(): Promise<Product[]> {
        return await PhoneModel.find().exec();
    }

    async findAllHeadphones(): Promise<Product[]> {
        return await HeadphoneModel.find().exec();
    }

    async findTabletById(id: string): Promise<Product | null> {
        return await TabletModel.findById(id).exec();
    }

    async findComputerById(id: string): Promise<Product | null> {
        return await ComputerModel.findById(id).exec();
    }

    async findPhoneById(id: string): Promise<Product | null> {
        return await PhoneModel.findById(id).exec();
    }

    async findHeadphoneById(id: string): Promise<Product | null> {
        return await HeadphoneModel.findById(id).exec();
    }
}