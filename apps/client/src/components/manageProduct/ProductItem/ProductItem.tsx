'use client'

import styled from "styled-components"
import { Text, Input } from "ui/components";
import { ArrowDownIcon } from "ui/icon";
import { color, font } from "ui/styles";
import React, { useRef, useState } from "react";
import axios from 'axios';
import { useMutation } from 'react-query';
import { deleteProduct } from "apis/manageProduct/deleteProduct/api";
import { patchProduct } from "apis/manageProduct/patchProduct/api";
import { Product } from 'types/product/product';

function ProductItem({productId, productName, productPrice, like, isInStock, imgUrl}: Product): JSX.Element{
    const [changedValue, setChangedValue] = useState(productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    const [stockStatus, setStockStatus] = useState(isInStock ? "재고 있음" : "재고 없음");
    const [isChanged, setIsChanged] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const deleteMutation = useMutation(deleteProduct);
    const patchMutation = useMutation(patchProduct);

    const openModal = () => setIsModalOpen(true);

    // 입력 가격 컴마 포함하기 & 바뀐 값 저장
    const handleOnChange = (event) => {
      const { value } = event.target;
      const formattedValue = value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setChangedValue(formattedValue);
      setIsChanged(true);
    };

    const handleStockChange = (event) => {
      setStockStatus(event.target.value);
      setIsChanged(!isChanged);
    };

    const handleSave = () => {
        if (!isChanged) return;

        const newPrice = Number(changedValue.replace(/,/g, ""));
        const newStockStatus = stockStatus === "재고 있음" ? true : false;

        patchMutation.mutate({productId, productPrice: newPrice, isInStock: newStockStatus});
        setIsChanged(false);
    };

    const handleRemove = () => {
        deleteMutation.mutate(productId);
        setIsModalOpen(false);
      };

    const selectRef = useRef(null);

    const handleSelectClick = () => {
      if (selectRef.current !== null) {
        selectRef.current.click();
      }
    };
      
    return(
        <Wrapper>
            <Container>
                <StyledDiv>
                    <Img src={imgUrl} alt={productName} />
                    <ProductInfo>
                        <Text $fontType='Placeholder'>{productName}</Text>
                        <Text $fontType='Placeholder' color={color.gray400}>
                            ₩ {productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </Text>
                    </ProductInfo>
                </StyledDiv>
                <StyledDiv>
                    <PriceInputBox>
                        <Text $fontType='Placeholder'>₩</Text>
                        <PriceInput
                            id='price'
                            value={changedValue}
                            onChange={handleOnChange}
                        />
                    </PriceInputBox>
                    <SelectContainer>
                        <StockChangeSelectBox ref={selectRef} value={stockStatus} onChange={handleStockChange}>
                            <option>재고 있음</option>
                            <option>재고 없음</option>
                        </StockChangeSelectBox>
                        <StyledArrowDownIcon onClick={handleSelectClick}>
                            <ArrowDownIcon />
                        </StyledArrowDownIcon>
                    </SelectContainer>
                    <RemoveButton onClick={openModal}>삭제</RemoveButton>
                    {isChanged && (
                        <SaveButton onClick={handleSave}>저장</SaveButton>
                    )}
                    {isModalOpen && (
                        <ModalContainer>
                            <ModalBox>
                                <TextBox>
                                    <Text $fontType="SubTitle1">해당 상품을 삭제하시겠습니까?</Text>
                                    <Text $fontType="Placeholder" color={color.gray400}>삭제 후에는 복구할 수 없어요.</Text>
                                </TextBox>
                                <ButtonBox>
                                    <ModalCancelButton onClick={() => setIsModalOpen(!isModalOpen)}>
                                        취소
                                    </ModalCancelButton>
                                    <ModalRemoveButton onClick={handleRemove}>
                                        삭제
                                    </ModalRemoveButton>
                                </ButtonBox>
                            </ModalBox>
                        </ModalContainer>
                    )}
                </StyledDiv>
            </Container>
        </Wrapper>
    )
}

export default ProductItem;

const Wrapper = styled.div`
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.8rem; 
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.2rem;
`

const Img = styled.img`
    width: 6.875rem;
    height: 6.875rem;
    border-radius: 1.875rem;
`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`

const PriceInputBox = styled.div`
    width: 8.125rem;
    height: 3rem;
    padding: 0.875rem 1.25rem;
    border-radius: 0.625rem;
    background-color: white;
    border: 2px solid ${color.gray50};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &:hover, &:focus {  
        border-color: ${color.gray400};  
        transition: 0.3s ease;
    }
`;

const PriceInput = styled.input`
    width: 4rem;
    ${font.Button};
    border: none;
    outline: none;
    margin-left: 0.2rem;
`;

const ChangeButton = styled.button`
    ${font.Button};
    text-decoration : underline;
    text-underline-offset : 0.5rem;
`;

const SaveButton = styled(ChangeButton)`
    color: ${color.gray400};
`

const RemoveButton = styled(ChangeButton)`
    color: ${color.red};
`

const SelectContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const StockChangeSelectBox = styled.select`
  padding: 0.875rem 2rem 0.875rem 1.25rem;
  ${font.Button};
  border: 2px solid ${color.gray50};
  border-radius: 0.625rem;
  
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:hover, &:focus {
    border-color: ${color.gray400};
    transition: 0.3s ease;
    outline: none;
  }
`;

const StyledArrowDownIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 0.6rem;
  transform: translateY(-50%);
  cursor: pointer;
`;

const ButtonContainer = styled.div`
    width: 100%;
    text-align: right;
`;

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(2px);
  z-index: 250;

  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 38.3rem;
  height: 19rem;
  border-radius: 1.25rem;
  padding: 3.8rem 3.25rem;
  gap: 4rem;
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
`

const ButtonBox = styled.div`
    align-self: flex-end;
    display: flex;
    flex-direction: row;
    gap: 1.1rem;
`

const ModalButton = styled.button`
    ${font.Button};
    padding: 1.31rem 2rem;
    background-color: white;
    border-radius: 1.25rem;
`

const ModalCancelButton = styled(ModalButton)`
    color: ${color.gray200};
    border: 3px solid ${color.gray200};
`

const ModalRemoveButton = styled(ModalButton)`
    color: ${color.red};
    border: 3px solid ${color.red};
`