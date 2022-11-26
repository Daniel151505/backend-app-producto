import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/product.dto';
import { PaginationProductDto } from './dto/pagination-product.dto';

@Injectable()
export class ProductService {
  public searchFilter: any;

  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async getProducts({
    limit,
    offset,
  }: PaginationProductDto): Promise<Product[]> {
    const products = await this.productModel.find().skip(offset).limit(limit);
    return products;
  }

  async searchProducts(
    { limit, offset }: PaginationProductDto,
    name: any,
    type: any,
  ): Promise<Product[]> {
    const products = await this.productModel.find().skip(offset).limit(limit);

    if (type === 'name') {
      this.searchFilter = products.filter((value) => {
        return value.name.toLowerCase().includes(name);
      });
    }

    if (type === 'brandName') {
      this.searchFilter = products.filter((value) => {
        return value.brand.name.toLowerCase().includes(name);
      });
    }

    if (type === 'url') {
      this.searchFilter = products.filter((value) => {
        return value.slug.toLowerCase().includes(name);
      });
    }

    if (type === 'categoryName') {
      this.searchFilter = products.filter((value) => {
        return value.category.name.toLowerCase().includes(name);
      });
    }

    if (name === '') {
      this.searchFilter = products;
    }

    return this.searchFilter;
  }

  async getProduct(productID: string): Promise<Product> {
    const product = await this.productModel.findById(productID);
    return product;
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const product = new this.productModel(createProductDto);
    return await product.save();
  }

  async deleteProduct(productID: string): Promise<Product> {
    const deletedProduct = await this.productModel.findByIdAndDelete(productID);
    return deletedProduct;
  }

  async updateProduct(
    productID: string,
    createProductDTO: CreateProductDto,
  ): Promise<Product> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      productID,
      createProductDTO,
      { new: true },
    );
    return updatedProduct;
  }
}
