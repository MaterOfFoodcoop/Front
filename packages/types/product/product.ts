export enum ProductCategory {
  Chip = "과자",
  Beverage = "음료",
  IceCream = "아이스크림",
  ProcessedFood = "가공식품",
  Etc = "기타",
}

export interface Product {
  productId: number;
  productName: string;
  category: ProductCategory;
  productPrice: number;
  like: number;
  isInStock: boolean;
  imgUrl: string;
}

export interface DetailProduct extends Product {
  description: string;
}
