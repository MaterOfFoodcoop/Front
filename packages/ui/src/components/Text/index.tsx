"use client";

import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { font } from 'ui/styles';

type Font = keyof typeof font;

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  color?: CSSProperties['color'];
  $fontType: Font;
  tag?: "span" | "p";
  style?: CSSProperties;
}

function Text({
        children,
        color,
        $fontType,
        tag,
        style
    }: TextProps):JSX.Element{
    return (
        <StyledText
            $fontType={$fontType}  
            as={tag}
           style={{color, ...style}}
        >
        {children}
        </StyledText>
  );
};

export default Text;

const StyledText = styled.span<{ $fontType: Font;}>`
  ${({ $fontType }) => font[$fontType]}
`;
