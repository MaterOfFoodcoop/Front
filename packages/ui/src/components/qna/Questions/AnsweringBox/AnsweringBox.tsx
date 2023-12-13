import React, { useState } from 'react';
import styled from "styled-components";
import { color, font } from "ui/styles";
import Text from 'ui/components/Text';
import { useMutation } from 'react-query';
import { postAnswer } from 'apis/qna/answer/api';
import axios from 'axios';

function AnsweringBox ({id}): JSX.Element{
    const [answer, setAnswer] = useState("");

    const postMutation = useMutation(postAnswer, {
        onSuccess: () => {
            alert('답변 작성을 성공했습니다.');
            window.location.reload();
        }
    });

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            const content = answer;
            const questionId = id;
            postMutation.mutate({content, questionId});
            setAnswer("");
        } catch (error) {
            alert('답변 작성을 실패했습니다.');
            console.error(error);
        }
    };
    
    
    return(
        <AnswerBox onSubmit={handleSubmit}>
            <Text $fontType='Header3'><Icon>A.</Icon></Text>
            <AnswerInputArea>
                <AnswerInput type="text" value={answer} onChange={e => setAnswer(e.target.value)} />
                <SubmitButton type="submit" value="제출" onClick={handleSubmit}>등록</SubmitButton>
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
    border: 2px solid #FFF7D0;
    background-color: #FFFEF8;
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
    background-color: #FFF7D0;
    ${font.Body};   
`

const AnswerInputArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2rem;
`

const SubmitButton = styled.button`
    display: flex;
    padding: 1.3rem 2rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;  

    ${font.Button};
    color: ${color.gray400};
    background-color: #FFFFFF;
    border: 3px solid ${color.yellow};
    border-radius: 1.25rem;


    &:hover {
        transition: 0.3s ease;
        color: ${color.yellow};
    }
`;

