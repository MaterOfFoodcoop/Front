import { DetailProduct, ProductCategory } from "../../types/product/product";

export const DETAIL_PRODUCT_DATA: DetailProduct = {
    productId: 0,
    productName: '바나나 우유',
    productPrice: 1700,
    like: 12,
    isInStock: true,
    category: ProductCategory.Beverage,
    imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQchSOL_16rgjO-nRoSKBAal5JRrcJDB8j-1w&usqp=CAU`,
    description: '남녀노소 모두 좋아하는 바나나우유입니다! ',   
}
