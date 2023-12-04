export interface Product {
    id: number;
    name: string;
    price: number;
    like: number;
    isInStock: boolean;
    imgSrc: string;
}

export interface DetailProduct extends Product{
    description: string;
}