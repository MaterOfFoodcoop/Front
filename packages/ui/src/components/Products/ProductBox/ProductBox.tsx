"use client";

import { LikeIcon } from "ui/icon";
import { Product } from "ui/../../types/product/product";
import styled from "styled-components";
import Text from "ui/components/Text";
import { color } from "ui/styles";

function ProductBox({
  productName,
  category,
  productPrice,
  like,
  isInStock,
  imgUrl,
}: Product): JSX.Element {
  return (
    <Container>
      <ImgBox>
        <Img src={imgUrl} alt="" />
      </ImgBox>
      <TextContents>
        <InnerRow>
          <Text $fontType="SubTitle2">{productName}</Text>
          <Badge $isInStock={isInStock} />
        </InnerRow>
        <Row>
          <InnerRow>
            <Text $fontType="SubTitle3">
              <MoneyIcon>₩</MoneyIcon> {productPrice}
            </Text>
          </InnerRow>
          <InnerRow style={{ cursor: "pointer" }}>
            <LikeIcon height="15px" width="17px" />
            <Text $fontType="SubTitle3" style={{ color: `${color.gray100}` }}>
              {like}
            </Text>
          </InnerRow>
        </Row>
      </TextContents>
    </Container>
  );
}

export default ProductBox;

const Container = styled.div`
  width: 100%;
  height: 25rem;
  min-width: 16.063rem;

  border-radius: 30px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  word-break: keep-all;
  border: 2px solid ${color.gray100};
`;

const TextContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 30%;
  padding-top: 30px;
  width: 100%;
`;

const ImgBox = styled.div`
  border-radius: 20px;
  width: 80%;
  aspect-ratio: 1 / 1;
  margin: auto 0;
`;
const Img = styled.img`
  width: 10.3rem;
  height: 10.3rem;
  object-fit: cover;
`;

interface BadgeProps {
  $isInStock: boolean;
}

const Badge = styled.span<BadgeProps>`
  height: 12px;
  width: 12px;
  background-color: ${(props) => (props.$isInStock ? "#AFEB80" : "#eb8080")};
  border-radius: 50%;
  display: inline-block;
`;

const MoneyIcon = styled.span`
  color: ${color.yellow};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InnerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
