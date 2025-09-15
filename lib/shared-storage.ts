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
}

export const sharedStorage = SharedStorage.getInstance();
