"use client";

import SummaryContent from "ui/components/SummaryContent/SummaryContent";
import Questions from "ui/components/qna/Questions/Questions";
import SearchBox from "ui/components/SearchBox/SearchBox";
import AppLayout from "admin/layouts/AppLayout";
import styled from "styled-components";

export default function Qna() {
  return (
    <AppLayout>
      <Container>
        <SummaryContent
          subject="Q&A"
          description="매점을 이용하면서 궁금했던/바라는 점을 물어볼 수 있어요."
        />
        <SearchBox
          placeholder="Q&A를 검색해 보세요."
          buttonText="질문 작성하기"
        />
        <Questions />
      </Container>
    </AppLayout>
  );
}

const Container = styled.div`
  padding: 6rem 11.25rem;
`;
