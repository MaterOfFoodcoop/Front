'use client'
import type { CSSProperties, TextareaHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { color, font } from 'ui/styles';
import Text from '../Text';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    errorMessage?: string;
    isError?: boolean;
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
}
  
function TextArea({
  label,
  placeholder,
  errorMessage,
  name,
  value,
  isError = false,
  width,
  height,
  onChange
}: TextAreaProps): JSX.Element{
  return (
    <div style={{width}}>
      {label ? <Label><Text $fontType='SubTitle2' tag='span'>{label} {isError ? "*": null} </Text></Label> : null}
      {isError ? <Text $fontType='SubTitle3' color='#EB8080' style={{fontWeight: '700'}} tag='span'>{errorMessage}</Text> : null}
      <div>
        <StyledTextArea
          $isError={isError}
          name={name}
          placeholder={placeholder}
          style={{width, height}}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default TextArea;

const StyledTextArea = styled.textarea<{ $isError: boolean }>`

  &::-webkit-scrollbar {
    width: 13px;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border-radius: 10px;
    background: ${color.gray400};
  }


  resize: none;
  margin-top: 1rem;
  ${font.SubTitle1};
  font-size: 1.25rem;

  width: 100%;
  padding: 21px 27px;
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

  ${(props) =>
  props.$isError &&
  css`
      box-shadow: 0px 0px 4px 0px #EB8080BF;
      &:focus {
      }
  `}
`;

const Label = styled.span`
    margin-right: 8px;
`;
