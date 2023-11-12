'use client'

import LikeIcon from 'client/assets/LikeIcon';
import styled from 'styled-components';
import Text from 'ui/components/Text';
import { color } from 'ui/styles';

interface ProductProps {
  name: string;
  price: number;
  like: number;
  isInStock: boolean;
}

function Product ({name, price, like, isInStock}: ProductProps): JSX.Element {
    return (
      <Container>
          <ImgBox>

          </ImgBox>
          <TextContents>
              <InnerRow><Text $fontType='SubTitle2'>{name}</Text><Badge $isInStock={isInStock} /></InnerRow>
            <Row>
              <InnerRow><Text $fontType='SubTitle3'><MoneyIcon>₩</MoneyIcon> {price}</Text></InnerRow>
              <InnerRow><LikeIcon/><Text $fontType='SubTitle3' style={{color: `${color.gray100}`}}>{like}</Text></InnerRow>
            </Row>
          </TextContents>
      </Container>
    );
  }
  
export default Product;

const Container = styled.div` 
  width: 354.7px;
  height: 25rem;

  background-color: white;
  border-radius:30px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-break: keep-all;
  border: 2px solid ${color.gray100};
`

const TextContents = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 30%;
  padding-top: 30px;
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
