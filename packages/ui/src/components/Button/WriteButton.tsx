"use client";

import type { CSSProperties } from "styled-components";
import styled, { css } from "styled-components";
import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { color } from "ui/styles";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  style?: React.CSSProperties;
  $borderColor?: CSSProperties["borderColor"];
}

function Button({
  children,
  style,
  $borderColor,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <CustomButton $borderColor={$borderColor} style={style} {...props}>
      {children}
    </CustomButton>
  );
}

export default Button;

const CustomButton = styled.button<ButtonProps>`
  word-break: keep-all;
  font-family: "nanumSquareNeo";

  border: 3px solid
    ${(props) => (props.$borderColor ? props.$borderColor : "initial")};

  ${(props) =>
    props.$borderColor === "gray" &&
    css`
      border-color: ${color.gray200};
      color: ${color.gray200};
    `}
  ${(props) =>
    props.$borderColor === "yellow" &&
    css`
      border-color: ${color.yellow};
      color: ${color.yellow};
    `}

  border-radius: 1.25rem;
  height: 3.875rem;
  padding: 0.3rem 2rem;
  font-size: 1.125rem;
  font-weight: 700;
  white-space: nowrap;
`;
