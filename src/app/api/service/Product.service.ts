import RequestMongo from '../db/models/RequestMongo.model';

import { IProduct } from '../db/interface/IProduct';

export class ProductService {
  static async createProduct(product: IProduct): Promise<unknown> {
    const productCreated = await RequestMongo.insert('product', product);
    return productCreated;
  }

  static async getAllProduct(): Promise<IProduct[]> {
    const products = await RequestMongo.find('product', {});
    return products as IProduct[];
  }

  static async getProductById(id: string): Promise<IProduct> {
    const product = await RequestMongo.findOne('product', { _id: id });
    return product as IProduct;
  }

  static async updateProduct(product: IProduct): Promise<void> {
    await RequestMongo.update('product', { _id: product._id }, product);
  }
}
