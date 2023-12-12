"use client";

import Link from "next/link";
import styled from "styled-components";
import { Pagination } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Product } from "../../../../types/product/product";
import ProductBox from "./ProductBox/ProductBox";
import { useEffect, useMemo } from 'react';
import Text from 'ui/components/Text/index';

interface ContentProps {
  productsData?: Product[];
  selectedCategory: string;  
}

function Products({ productsData, selectedCategory }: ContentProps): JSX.Element {
  const gottenData = productsData || [];
  const ITEMS_PER_PAGE = 8;

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const filteredData = useMemo(() => {
    if (selectedCategory === '전체') {
      return gottenData;
    }
    return gottenData.filter(product => product.category === selectedCategory);
  }, [gottenData, selectedCategory]);

  const LAST_PAGE = Math.ceil(filteredData.length / ITEMS_PER_PAGE);


  useEffect(() => {
    const start = ITEMS_PER_PAGE * (page - 1);
    const end = page === LAST_PAGE ? undefined : ITEMS_PER_PAGE * page;
    setData(filteredData.slice(start, end));
  }, [filteredData, page]);

  const handlePage = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };


  return (
    <Container>
      <ProductContainer>
        {data.length > 0 ? (
          data.map(
            ({
              productId,
              productName,
              productPrice,
              like,
              isInStock,
              imgUrl,
              category,
            }) => (
              <Link
                key={productId}
                href={`/product/${productId}`}
                passHref
                style={{ width: `calc(25% - 40px)`, minWidth: "16rem" }}
              >
                <ProductBox
                  productId={productId}
                  productName={productName}
                  productPrice={productPrice}
                  like={like}
                  isInStock={isInStock}
                  imgUrl={imgUrl}
                  category={category}
                />
              </Link>
            )
          )
        ) : (
          <Text $fontType='SubTitle2'>해당 카테고리에 상품이 없어요.</Text>
        )}
      </ProductContainer>
  
      {data.length > 0 && (
        <PaginationContainer>
          <Pagination
            count={LAST_PAGE}
            page={page}
            boundaryCount={2}
            size="large"
            onChange={handlePage}
          />
        </PaginationContainer>
      )}
    </Container>
  );  
}

export default Products;

const Container = styled.div`
  margin: 5rem 0;
`;
const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
`;

const PaginationContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;
