import {Product} from '../types';

const API_BASE_URL = 'https://api.example.com';

export const apiService = {
  async getProducts(): Promise<Product[]> {
    // Mock data for demo
    return [
      {
        id: '1',
        title: 'Product 1',
        description: 'High-quality product with excellent features',
        price: 99.99,
      },
      {
        id: '2',
        title: 'Product 2',
        description: 'Premium product for professionals',
        price: 149.99,
      },
    ];
  },

  async getProductById(id: string): Promise<Product> {
    const products = await this.getProducts();
    const product = products.find(p => p.id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  },
};
