'use client'

import styled from 'styled-components';
import { QNA_QUESTION_DATA } from 'client/mocks/qna/qna';
import { Pagination } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import QuestionItem from './QuestionItem/QuestionItem';

interface Props {
  subject?: string;
  description?: string;
}

function Questions ({}: Props): JSX.Element {
  const dummydata = QNA_QUESTION_DATA;
  const ITEMS_PER_PAGE = 4;
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
        {data.map((data, idx) => (  
            <QuestionItem key={idx} id={data.id} title={data.title} createdDate={data.createdDate} isAnswered={data.isAnswered} content={data.content}/>
          )
        )}
      </ProductContainer>
      
      <PaginationContainer>
        <Pagination count={LAST_PAGE} defaultPage={1} boundaryCount={2} 
          color="standard" size="large" onChange={handlePage}/>
      </PaginationContainer>
    </Container>
  );
}
  
export default Questions;


const Container = styled.div`
  margin: 40px 0px;
`
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const PaginationContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`
