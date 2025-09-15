// Shared storage utilities for client-side data persistence
export class SharedStorage {
  private static instance: SharedStorage;
  private storage: Storage;

  private constructor() {
    this.storage = typeof window !== 'undefined' ? localStorage : ({} as Storage);
  }

  public static getInstance(): SharedStorage {
    if (!SharedStorage.instance) {
      SharedStorage.instance = new SharedStorage();
    }
    return SharedStorage.instance;
  }

  public setItem(key: string, value: any): void {
    try {
      this.storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting item in storage:', error);
    }
  }

  public getItem(key: string): any {
    try {
      const item = this.storage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error getting item from storage:', error);
      return null;
    }
  }

  public removeItem(key: string): void {
    try {
      this.storage.removeItem(key);
    } catch (error) {
      console.error('Error removing item from storage:', error);
    }
  }

  public clear(): void {
    try {
      this.storage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }

  // Product-specific methods
  public async getAllProducts(): Promise<any[]> {
    try {
      const products = this.getItem('products') || [];
      return Array.isArray(products) ? products : [];
    } catch (error) {
      console.error('Error getting all products:', error);
      return [];
    }
  }

  public async getProductStats(): Promise<any> {
    try {
      const products = await this.getAllProducts();
      const totalProducts = products.length;
      const activeProducts = products.filter((p: any) => p.status === 'active').length;
      const totalValue = products.reduce((sum: number, p: any) => sum + (p.price || 0), 0);
      
      return {
        totalProducts,
        activeProducts,
        inactiveProducts: totalProducts - activeProducts,
        totalValue,
        averagePrice: totalProducts > 0 ? totalValue / totalProducts : 0
      };
    } catch (error) {
      console.error('Error getting product stats:', error);
      return {
        totalProducts: 0,
        activeProducts: 0,
        inactiveProducts: 0,
        totalValue: 0,
        averagePrice: 0
      };
    }
  }
}

export const sharedStorage = SharedStorage.getInstance();
export const productStorage = sharedStorage;
