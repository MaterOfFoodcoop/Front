'use client'

import AppLayout from "client/layouts/AppLayout"
import { usePathname } from "next/navigation"
import styled from "styled-components"
import { color } from "ui/styles";

export default function ProductDetail() {
  const pathname = usePathname();


  return (
    <AppLayout>
      <Container>
        
        <p>Current pathname: {pathname}</p>

      </Container>
    </AppLayout>
  )
}

const Container = styled.div`
  padding: 6rem 11.25rem;

  background-color: red;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-break: keep-all;
`

const TextContents = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 30%;
`

const ImgBox = styled.div` 
  border-radius: 20px;
  height: 70%;
  background-color: lightgray;
`

interface BadgeProps {
  $isInStock: boolean;
}


const Badge = styled.span<BadgeProps>`
  height: 12px;
  width: 12px;
  background-color: ${props => props.$isInStock ? '#AFEB80' : '#eb8080'};
  border-radius: 50%;
  display: inline-block;
`;

const MoneyIcon = styled.span`
  color: ${color.yellow};
  
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const InnerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
