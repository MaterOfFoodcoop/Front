import { font } from 'ui/styles';
import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

type Font = keyof typeof font;

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  color?: CSSProperties['color'];
  fontType: Font;
}

const Text = ({
  children,
  color,
  fontType,
}: Props) => {
  return (
    <StyledText
      style={{color}}  
      fontType={fontType}
    >
      {children}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.span<{ fontType: Font;}>`
  ${({ fontType }) => font[fontType]}
`;
