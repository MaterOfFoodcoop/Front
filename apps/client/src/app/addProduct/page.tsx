'use client'

import { useState } from 'react';
import SummaryContent from "ui/components/SummaryContent/SummaryContent"
import AppLayout from "../../layouts/AppLayout";
import { Text, Input, TextArea } from "ui/components"
import { font, color } from "ui/styles"
import styled from "styled-components"
import FilterTab from "ui/components/FilterTabs/FilterTab/FilterTab"
import StockStateChange from "../../components/addProduct/StockStateChange/StockStateChange"
import ProductFilterTabs from "../../components/addProduct/ProductFilterTabs/ProductFilterTabs"
import { PlusIcon } from "ui/icon"

export default function AddProduct(){
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    };

    return(
        <AppLayout>
            <Container>
                <SummaryContent subject="상품 추가" description="와라! 매점에 상품을 추가해 주세요."/>
                <AddProductBox>
                <ImageUploadBox onClick={() => document.getElementById('fileInput').click()}>
                    {selectedImage ? (
                        <img src={selectedImage} alt="Selected" style={{ width: '100%', height: '100%' }} />
                    ) : (
                        <PlusIcon />
                    )}
                    <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageUpload}
                    />
                </ImageUploadBox>
                    <AddInfoBox>
                        <Input label="상품 이름" placeholder="Ex. 차카니" width={"44rem"} />
                        <TextArea label="상품 설명" placeholder="Ex. 추억의 차카니입니다." width={"44rem"} />
                        <Text $fontType="SubTitle2">상품 종류</Text>
                        <ProductFilterTabs />
                        <StyledDiv>
                            <Input label="가격" placeholder="Ex. 1,700" width={"22rem"} />
                            <StockStateChange />
                        </StyledDiv>
                        <ButtonBox>
                            <CancelButton>취소</CancelButton>
                            <AddButton>등록</AddButton>
                        </ButtonBox>
                    </AddInfoBox>
                </AddProductBox>
            </Container>
        </AppLayout>
    )
}

const Container = styled.div`
    padding: 6rem 11.25rem;
    display: flex;
    flex-direction: column;
    gap: 8rem;
`

const AddProductBox = styled.div`
    display: flex;
    gap: 4.3rem;
`

const ImageUploadBox = styled.div`
    width: 22.6rem;
    height: 22.6rem;
    background-color: ${color.gray50};
    border-radius: 1.875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`

const AddInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
`
const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1.1rem;
`

const ButtonBox = styled(StyledDiv)`
    margin-top: 6.8rem;
    width: 20rem;
    gap: 1.5rem;
    align-self: flex-end;
`

const StyledButton = styled.button`
    ${font.Button};
    color: ${color.gray200};
    padding: 1.3rem 3rem;
    border-radius: 1.25rem;
    background-color: white;
    &:hover, &:focus {
        transition: 0.3s ease;
    }
`

const CancelButton = styled(StyledButton)`
    border: 3px solid ${color.gray200};
    &:hover, &:focus {
        color: ${color.gray600};
    }
`

const AddButton = styled(StyledButton)`
    border: 3px solid ${color.yellow};
    &:hover, &:focus {
        color: ${color.yellow};
    }
`