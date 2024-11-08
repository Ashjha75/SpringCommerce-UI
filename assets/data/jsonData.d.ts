// src/assets/data/jsonData.d.ts

declare module './jsonData.js' {
  export interface Category {
    imageUrl: string;
    name: string;
    price: string;
  }

  export interface Brands {
    imageUrl: string;
    name: string;
    price: string;
  }

  export interface Food {
    imageUrl: string;
    title: string;
    price: string;
  }

  export const categoryData: Category[];
  export const cardData: Brands[];
  export const foodData: Food[];
}
