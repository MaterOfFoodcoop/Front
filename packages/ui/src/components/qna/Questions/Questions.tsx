'use client'

import styled from "styled-components";
import { Pagination } from "@mui/material";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import QuestionItem from "./QuestionItem/QuestionItem";
import { getQnA } from "apis/qna/api";
import { useQuery } from "react-query";

interface Props {
  subject?: string;
  description?: string;
}

function Questions ({}: Props): JSX.Element {
  const { data: QnAs } = useQuery(
    'qna',
    () => getQnA(),
  );

  const QnADatas = QnAs || [];
  const ITEMS_PER_PAGE = 4;
  const LAST_PAGE = Math.ceil(QnADatas.length / ITEMS_PER_PAGE);

  const [page, setPage] = useState(1);
  const [data, setData] = useState(QnADatas.slice(0, ITEMS_PER_PAGE));

  useEffect(() => {
    if(page === LAST_PAGE) {
      setData(QnADatas.slice(ITEMS_PER_PAGE * (page - 1)));
    } else {
      setData(QnADatas.slice(ITEMS_PER_PAGE * (page - 1), ITEMS_PER_PAGE * page));
    }  
  }, [LAST_PAGE, QnAs, page]);

  const handlePage = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container>
      <ProductContainer>
        {data.map(({
          id,
          title,
          content,
          createdAt,
          answer
        }) => (  
            <QuestionItem id={id} title={title} createdDate={createdAt} Answer={answer} content={content}/>
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
