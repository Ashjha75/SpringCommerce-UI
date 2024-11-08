declare module './jsonData.js' {
  export interface Category {
    id: number;
    imageUrl: string;
    name: string;
    price: string;
  }

  export interface Brands {
    id: number;
    imageUrl: string;
    name: string;
    price: string;
  }

  export interface Food {
    id: number;
    imageUrl: string;
    title: string;
    iconText: string;
    offerValue?: string;
  }

  export interface Features {
    id: number;
    imageUrl: string;
    name: string;
    price: string;
  }

  export interface Products {
    id: number;
    imageUrl: string;
    title: string,
    description: string,
    offeredPrice: string,
    originalPrice: string,
    offerValue: string
  }

  export const categoryData: Category[];
  export const cardData: Brands[];
  export const foodData: Food[];
  export const featuresData: Features[];
  export const product1: Products[];
}
