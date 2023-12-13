'use client'

import { useState } from 'react';
import { font, color } from "ui/styles";
import styled from "styled-components"
import { Text } from 'ui/components';


function StockStateChange({ setIsStocked }) {
    return (
      <ButtonBox>
        <Text $fontType='SubTitle2' color={'black'}>재고 유무</Text>
        <StyledDiv>
          <YesButton onClick={() => setIsStocked(true)}>Yes</YesButton>
          <NoButton onClick={() => setIsStocked(false)}>No</NoButton>
        </StyledDiv>
      </ButtonBox>
    );
  }
  

export default StockStateChange;

const ButtonBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
`

const StateButton = styled.button`
    ${font.Button};
    width: 10rem;
    padding: 1.3rem 3.6rem;
    border-radius: 1.25rem;
    border: 3px solid ${color.gray50};
    &:hover, &:focus {
        transition: 0.3s ease;
    }
`;

const YesButton = styled(StateButton)`
    color: ${color.green};
    &:hover, &:focus {
        border-color: ${color.green};
    }
`;

const NoButton = styled(StateButton)`
    color: ${color.red};
    &:hover, &:focus {
        border-color: ${color.red};
    }
`