'use client'

import styled from 'styled-components';
import Product from './Product/Product';
import { MAIN_PRODUCT_DATA } from 'client/mocks/main/main';
import { Pagination } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';

interface ContentProps {
  subject?: string;
  description?: string;
}

function Products ({}: ContentProps): JSX.Element {
  const dummydata = MAIN_PRODUCT_DATA;
  const ITEMS_PER_PAGE = 8;
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

  return (
    <Container>
      <ProductContainer>
        {data.map( ({id, name, price, like, isInStock}) => (
            <Product key={id} name={name} price={price} like={like} isInStock={isInStock}/>
          )
        )}
      </ProductContainer>
      
      <PaginationContainer>
        <Pagination count={LAST_PAGE} defaultPage={1} boundaryCount={2} 
          size="large" onChange={handlePage}/>
      </PaginationContainer>
    </Container>
  );
}
  
export default Products;


const Container = styled.div`
  margin: 40px 0px;
`
const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`

const PaginationContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`
