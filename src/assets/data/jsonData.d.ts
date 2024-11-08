declare module '../../../assets/data/jsonData.js' {
  export interface Category {
    imageUrl: string;
    name: string;
    price: string;
  }

  export const categoryData: Category[];
}
