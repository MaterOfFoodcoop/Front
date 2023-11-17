"use client";

import AppLayout from "client/layouts/AppLayout";
import styled from "styled-components";
import Input from "ui/components/Input";
import TextArea from "ui/components/TextArea";
import WriteButton from "ui/components/Button/WriteButton";
import SummaryContent from "ui/components/SummaryContent/SummaryContent";

export default function QnaWrite() {
  return (
    <AppLayout>
      <Container>
        <SummaryContent
          subject="질문 작성"
          description="궁금한 점을 작성해 보세요."
        />
        <Col>
          <Input
            label={"제목"}
            placeholder="Ex. 매점 동아리는 어떻게 운영되고 있나요?"
            errorMessage="제목을 입력해 주세요."
          />
          <TextArea
            height={"12.25rem"}
            label={"글 내용"}
            placeholder="Ex. 점심, 저녁 시간에 매점 동아리 학생들이 계산하는 업무를 하고 있는데, 어떤 형식으로 업무가 진행되고 있는지 궁금합니다."
            errorMessage="내용을 입력해 주세요."
          />
          <Row>
            <WriteButton $borderColor="gray">취소</WriteButton>
            <WriteButton $borderColor="yellow">등록</WriteButton>
          </Row>
        </Col>
      </Container>
    </AppLayout>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 4.375rem);
  padding: 6rem 11.25rem;
  gap: 1rem;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;
  justify-content: flex-end;
`;
