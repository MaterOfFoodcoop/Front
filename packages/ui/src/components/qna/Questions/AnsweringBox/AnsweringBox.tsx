import React, { useState } from "react";
import styled from "styled-components";
import { color, font } from "ui/styles";
import Text from "ui/components/Text";
import { useMutation } from "react-query";
import { postAnswer } from "apis/qna/answer/api";
import axios from "axios";

// 지금은 배포가 더 급하다 ㅅㄱㄹ
export interface Answer {
  id: string;
  content: string;
}

function AnsweringBox({ id }: { id: string }): JSX.Element {
  const [answer, setAnswer] = useState("");

  const mutation = useMutation(
    ({ content, id }: Answer) => postAnswer({ content, id }),
    {
      onSuccess: async () => {
        alert("답변이 등록되었습니다!");
      },
    }
  );

  const handleClick = (e: any) => {
    e.preventDefault();
    mutation.mutate({ content: answer, id });
    setAnswer("");
  };

  if (mutation.isLoading) {
    console.log("Loading...");
  }

  if (mutation.isError) {
    console.error("Error:", mutation.error);
  }

  if (mutation.isSuccess) {
    console.log("Success!", mutation.data);
  }

  return (
    <AnswerBox>
      <Text $fontType="Header3">
        <Icon>A.</Icon>
      </Text>
      <AnswerInputArea>
        <AnswerInput
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <SubmitButton onClick={handleClick}>등록</SubmitButton>
      </AnswerInputArea>
    </AnswerBox>
  );
}

export default AnsweringBox;

const AnswerBox = styled.form`
  width: 100%;
  min-height: fit-content;
  min-width: fit-content;
  border-radius: 30px;
  padding: 3rem;
  word-break: keep-all;
  border: 2px solid #fff7d0;
  background-color: #fffef8;
  display: flex;
  gap: 1.25rem;
`;

const Icon = styled.span`
  color: ${color.yellow};
  font-size: 1.75rem;
`;

const AnswerInput = styled.input`
  width: 100%;
  padding: 2.1rem 2rem;
  border-radius: 1.25rem;
  border: none;
  &:focus {
    outline: none;
  }
  background-color: #fff7d0;
  ${font.Body};
`;

const AnswerInputArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
`;

const SubmitButton = styled.button`
  display: flex;
  padding: 1.3rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  ${font.Button};
  color: ${color.gray400};
  background-color: #ffffff;
  border: 3px solid ${color.yellow};
  border-radius: 1.25rem;

  &:hover {
    transition: 0.3s ease;
    color: ${color.yellow};
  }
`;
