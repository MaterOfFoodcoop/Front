"use client";

import Link from "next/link";
import styled from "styled-components";
import { Pagination } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Product } from "packages/types/product/product";
import ProductBox from "./ProductBox/ProductBox";

interface ContentProps {
  productsData?: Product[];
  title?: string;
}

function Products({ productsData }: ContentProps): JSX.Element {
  const gottenData = productsData || [];
  const ITEMS_PER_PAGE = 8;
  const LAST_PAGE = Math.ceil(gottenData.length / ITEMS_PER_PAGE);

  const [page, setPage] = useState(1);
  const [data, setData] = useState(gottenData.slice(0, ITEMS_PER_PAGE));

  const handlePage = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);

    const start = ITEMS_PER_PAGE * (value - 1);
    const end = value === LAST_PAGE ? undefined : ITEMS_PER_PAGE * value;
    setData(gottenData.slice(start, end));
  };

  return (
    <Container>
      <ProductContainer>
        {data.map(
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
        )}
      </ProductContainer>

      <PaginationContainer>
        <Pagination
          count={LAST_PAGE}
          defaultPage={1}
          boundaryCount={2}
          size="large"
          onChange={handlePage}
        />
      </PaginationContainer>
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
