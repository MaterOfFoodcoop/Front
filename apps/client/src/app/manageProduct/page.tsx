'use client'

import { ChangeEvent, useState, useEffect } from 'react';
import SummaryContent from "ui/components/SummaryContent/SummaryContent"
import AppLayout from "../../layouts/AppLayout"
import styled from "styled-components"
import Button from "ui/components/Button/SearchButton"
import ProductItem from '../../components/manageProduct/ProductItem/ProductItem';
import Link from 'next/link';
import { Pagination } from "@mui/material";
import { Product } from "../../../../../packages/types/product/product";
import { getProducts } from "apis/products/api";
import { useQuery } from "react-query";
import SearchBox from 'ui/components/SearchBox/SearchBox';


function ManageProduct(): JSX.Element {
    const { data: products } = useQuery({
        queryKey: ["products"],
        queryFn: () => getProducts(),
    });

    const [page, setPage] = useState(1);
    const [displayData, setDisplayData] = useState<Product[]>([]);

    const ITEMS_PER_PAGE = 7;
    const LAST_PAGE = Math.ceil((products?.length || 0) / ITEMS_PER_PAGE);

    useEffect(() => {
        if (products) {
          const startIdx = (page - 1) * ITEMS_PER_PAGE;
          const endIdx = startIdx + ITEMS_PER_PAGE;
          setDisplayData(products.slice(startIdx, endIdx));
        }
      }, [products, page]);

    const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    };


    return(
        <AppLayout>
            <Container>
                <SummaryContent 
                    subject="상품 관리" 
                    description="와라! 매점에 있는 상품을 관리할 수 있어요."
                />
                <SearchBox placeholder="관리할 상품을 검색해 보세요." buttonText="검색"/>
                <ButtonBox>
                <Link href="/addProduct">
                    <Button>+ 상품 추가하기</Button>
                </Link>
                </ButtonBox>
                {displayData.map( ({productId, productName, productPrice, category, like, isInStock, imgUrl}) => (
                <div key={productId}>
                  <ProductItem productId={productId} productName={productName} productPrice={productPrice} category={category} like={like} isInStock={isInStock} imgUrl={imgUrl}/>
                </div>
              )
            )}
            <PaginationContainer>
                <Pagination count={LAST_PAGE} page={page} onChange={handlePageChange} />
            </PaginationContainer>
            </Container>
        </AppLayout>
    )
}

export default ManageProduct;

const Container = styled.div`
    padding: 6rem 11.25rem;
`

const ButtonBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 4.8rem;
`

const PaginationContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`