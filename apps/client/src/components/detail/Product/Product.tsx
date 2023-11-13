'use client'

import LikeIcon from 'client/assets/LikeIcon';
import { DETAIL_PRODUCT_DATA } from 'client/mocks/detail/detail';
import { DetailProduct } from 'client/types/product/product';
import { useState } from 'react';
import styled from 'styled-components';
import Text from 'ui/components/Text';
import { color } from 'ui/styles';

function ProductBox ({id} : {id: number}): JSX.Element {
  const dummydata = DETAIL_PRODUCT_DATA;
  const [productData, setProductData] = useState<DetailProduct>(dummydata);
  
  return (
      <Container>
          <TopBox>
          <ImgBox>
            <Img src={productData.imgSrc} alt=""/>
          </ImgBox>
          <TextContents>
            <Row>
              <Text $fontType='Header1' style={{fontSize: '28px', backgroundColor: '#FFF7D0', padding: '5px', fontWeight: '800'}}>{productData.name}</Text>
              <Badge $isInStock={productData.isInStock}><Text $fontType='SubTitle2'> 재고 {productData.isInStock? "있": "없"}음</Text></Badge>
            </Row>
            <Row>
              <Text $fontType='Header3'><MoneyIcon>₩</MoneyIcon> {productData.price}</Text>
              <InnerRow style={{cursor: "pointer"}}><LikeIcon width={'23px'} height={'21px'}/><Text $fontType='Header3' style={{color: `${color.gray100}`}}>{productData.like}</Text></InnerRow>
            </Row>
        </TextContents>
        </TopBox>
        <BottomBox>
          <Text $fontType='Body'>{productData.description}</Text>
        </BottomBox>
      </Container>
    );
  }
  
export default ProductBox;

const Container = styled.div`   
  height: 30rem;
  width: 70%;
  min-width: fit-content;
  border-radius:30px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  word-break: keep-all;
  border: 3px solid ${color.gray100};
  box-shadow: 0px 0px 4px 0px #FFD60040;
`

const TopBox = styled.div`
  width: 100%;
  height: 50%;
  min-width: fit-content;   
  height: fit-content;
  display: flex;
  gap: 4.375rem;
`

const TextContents = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

const ImgBox = styled.div` 
  min-width: 10.375rem;
  aspect-ratio: 1 / 1;
  margin: auto 0;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`

interface BadgeProps {
  $isInStock: boolean;
}

const Badge = styled.span<BadgeProps>`
  border-radius: 50px;
  padding: 10px 15px;
  font-size: 18px;
  border: 3px solid ${props => props.$isInStock ? '#AFEB80' : '#eb8080'};
  color: ${props => props.$isInStock ? '#AFEB80' : '#eb8080'};
  display: inline-block;
  word-break: keep-all;
`;

const MoneyIcon = styled.span`
  color: ${color.yellow}; 
`

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const InnerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const BottomBox = styled.div`
  width: 100%;
  height: 30%;
  padding-top: 2rem;
`
