'use client'

import { ChangeEvent, useState, useEffect } from 'react';
import { MAIN_PRODUCT_DATA } from 'ui/../../mocks/main/main';
import SummaryContent from "ui/components/SummaryContent/SummaryContent"
import AppLayout from "../../layouts/AppLayout"
import styled from "styled-components"
import Button from "ui/components/Button/SearchButton"
import ProductItem from '../../components/manageProduct/ProductItem/ProductItem';
import Link from 'next/link';

function ManageProduct(): JSX.Element {
    const dummydata = MAIN_PRODUCT_DATA;
    const ITEMS_PER_PAGE = 7;
    const LAST_PAGE = Math.ceil(dummydata.length / ITEMS_PER_PAGE);

    const [page, setPage] = useState(1);
    const [data, setData] = useState(dummydata.slice(0, ITEMS_PER_PAGE));

    useEffect(() => {
        if(page === LAST_PAGE) {
          setData(dummydata.slice(ITEMS_PER_PAGE * (page - 1)));
        } else {
          setData(dummydata.slice(ITEMS_PER_PAGE * (page - 1), ITEMS_PER_PAGE * page));
        }  
    }, [LAST_PAGE, dummydata, page]);

    const handlePage = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };    

    return(
        <AppLayout>
            <Container>
                <SummaryContent 
                    subject="상품 관리" 
                    description="와라! 매점에 있는 상품을 관리할 수 있어요."
                />
                <ButtonBox>
                <Link href="/addProduct">
                    <Button>+ 상품 추가하기</Button>
                </Link>
                </ButtonBox>
                {data.map( ({productId, productName, productPrice, category, like, isInStock, imgUrl}) => (
                    <div key={productId}>
                        <ProductItem productId={productId} productName={productName} productPrice={productPrice} category={category} like={like} isInStock={isInStock} imgUrl={imgUrl}/>
                    </div>
                    )
                )}
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