'use client'
import type { CSSProperties, InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { color, font } from 'ui/styles';
import Text from '../Text';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorMessage?: string;
    width?: CSSProperties['width'];
    isError?: boolean;
}
  
function Input({
  label,
  placeholder,
  errorMessage,
  name,
  value,
  width,
  isError = false,
}: InputProps): JSX.Element{
  return (
    <div style={{width}}>
      {label ? <Label><Text $fontType='SubTitle2' tag='span'>{label} {isError ? "*": null} </Text></Label> : null}
      {isError ? <Text $fontType='SubTitle3' color='#EB8080' style={{fontWeight: '700'}} tag='span'>{errorMessage}</Text> : null}
      <div>
        <StyledInput
          $isError={isError}
          name={name}
          placeholder={placeholder}
          style={{width}}
          value={value}
        />
      </div>
    </div>
  );
}

export default Input;

const StyledInput = styled.input<{ $isError: boolean, width: string }>`
    margin-top: 1rem;
    ${font.SubTitle1}
    font-size: 1.25rem;
    color: ${color.gray800};
    width: '100%';    
    padding: 21px 27px;
    background-color: white;
    border: 3px solid ${color.gray50};
    border-radius: 20px;
    outline: none;

    &::placeholder {
        color: ${color.gray400};
    }

    &:focus {
        border-color: ${color.gray400};  
        transition: 0.3s ease;
    }

    ${(props) => props.$isError &&
    css`
        box-shadow: 0px 0px 4px 0px #EB8080BF;
        &:focus {
        }
    `}
`;

const Label = styled.span`
    margin-right: 8px;
`;

