import React, { useState } from 'react';
import styled from "styled-components";
import { color, font } from "ui/styles";
import Text from 'ui/components/Text';

function AnsweringBox ({ onAnswerSubmit }): JSX.Element{
    const [answer, setAnswer] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      onAnswerSubmit(answer);
      setAnswer("");
    };

    const resizeTextarea = (event) => {
        event.target.style.height = 'auto';
        event.target.style.height = `${event.target.scrollHeight}px`;
    };

    const handleChange = (event) => {
        setAnswer(event.target.value);
        resizeTextarea(event);
    };

    return(
        <AnswerBox onSubmit={handleSubmit}>
            <Text $fontType='Header3'><Icon>A.</Icon></Text>
            <AnswerInputArea>
                <AnswerInput 
                    value={answer} 
                    onChange={handleChange} 
                />
                <SubmitButton type="submit" value="답변">등록</SubmitButton>
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

const AnswerInput = styled.textarea`
    width: 100%;
    height: fit-content;
    padding: 2rem;
    border-radius: 1.25rem;
    border: none;
    &:focus {
        outline: none;
    }
    background-color: #FFF7D0;
    ${font.Body};   
    resize: none; 
    overflow: auto;
`

// const AnswerInput = styled.input`
//     width: 100%;
//     padding: 2.1rem 2rem;
//     border-radius: 1.25rem;
//     border: none;
//     &:focus {
//         outline: none;
//     }
//     background-color: #FFF7D0;
//     ${font.Body};   
// `

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

