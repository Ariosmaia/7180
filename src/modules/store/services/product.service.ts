import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/modules/store/entities/product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly repository: Repository<Product>,
    ) { }

    async get(): Promise<Product[]> {
        return await this.repository.find();
    }

    async post(product: Product) {
        await this.repository.save(product);
    }
}