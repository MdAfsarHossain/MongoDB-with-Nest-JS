import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

    // Create Product
    async createProduct(): Promise<Product> {
        const product = new this.productModel({
            title: "Gaming Laptop",
            tags: [
                { name: "electronics" },
                { name: 'gaming' },
                { name: 'laptop' }
            ]
        })

        return product.save();
    }

    // Get All Products
    async getAllProducts(): Promise<Product[]> {
        return this.productModel.find();
    }
}
