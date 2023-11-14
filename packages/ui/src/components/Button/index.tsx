"use client" 

import styled from 'styled-components';
import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { color } from 'ui/styles';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  style?: React.CSSProperties;
}

function Button ({
    children,
    style
  }: ButtonProps): JSX.Element {
    return (
      <CustomButton
        style={style}
      >
        {children}
      </CustomButton>
    );
  }
  
export default Button;

const CustomButton = styled.button<ButtonProps>`
  word-break: keep-all;
  color: white;
  background-color: ${color.yellow};
  border-radius: 1.25rem;
  height: 3.875rem;
  padding: 0.3rem 2rem;
  font-size: 1.125rem;
  font-weight: 300;
`;