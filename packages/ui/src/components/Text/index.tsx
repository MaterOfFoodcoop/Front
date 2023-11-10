"use client";

import { font } from 'ui/styles';
import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

type Font = keyof typeof font;

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  color?: CSSProperties['color'];
  $fontType: Font;
  tag?: 'span' | 'p';
}

function Text({
        children,
        color,
        $fontType,
        tag
    }:Props):JSX.Element{
    return (
        <StyledText
            style={{color}}  
            $fontType={$fontType}
            as={tag}
        >
        {children}
        </StyledText>
  );
};

export default Text;

const StyledText = styled.p<{ $fontType: Font;}>`
  ${({ $fontType }) => font[$fontType]}
  background-color: red;
`;
