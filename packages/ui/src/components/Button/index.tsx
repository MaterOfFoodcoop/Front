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
}

function Button ({
    children,
  }: ButtonProps): JSX.Element {
    return (
      <CustomButton
      >
        {children}
      </CustomButton>
    );
  }
  
export default Button;

const CustomButton = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: ${color.yellow};
    border-radius: 1.25rem;
    font-size: 0.938rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    :hover {
        background: #a4a4a4;
        transition: background 0.2s ease-in-out;
    }
    :disabled {
        background: #dcdcdc;
        pointer-events: none;
    }
`;