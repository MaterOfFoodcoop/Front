'use client'

import { ChangeEvent, useState } from 'react';
import SummaryContent from "ui/components/SummaryContent/SummaryContent"
import AppLayout from "../../layouts/AppLayout";
import { Text, Input, TextArea } from "ui/components"
import { font, color } from "ui/styles"
import styled from "styled-components"
import StockStateChange from "../../components/addProduct/StockStateChange/StockStateChange"
import ProductFilterTabs from "../../components/addProduct/ProductFilterTabs/ProductFilterTabs"
import { PlusIcon } from "ui/icon"
import { addProduct } from "apis/addProduct/api";
import { useMutation } from 'react-query';


export default function AddProduct(){
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [inStock, setInStock] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Chip');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [price, setPrice] = useState("");

    const addMutation = useMutation(addProduct, {
        onSuccess: () => {
            alert('상품을 추가했습니다.');
            window.location.reload();
            window.history.go(-1);
        },
    });

    const handleSubmit = () => {
        try {
            const formData = new FormData();
            const fileField = document.querySelector('input[type="file"]') as HTMLInputElement;
        
            formData.append('productName', productName);
            formData.append('productDetail', productDescription);
            formData.append('isInStock', String(inStock));
            formData.append('category', selectedCategory);        
            formData.append('file', fileField.files[0]);
            formData.append('productPrice', price);
        
            console.log('category:', selectedCategory);
            console.log('price:', price);
            console.log('inStock:', inStock);

            addMutation.mutate(formData);
        } catch (error) {
            alert('상품을 추가하지 못 했습니다.');
            console.log(error);
        }
    };
    
    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    return(
        <AppLayout>
            <Container>
                <SummaryContent subject="상품 추가" description="와라! 매점에 상품을 추가해 주세요."/>
                <AddProductBox>
                <ImageUploadBox onClick={() => document.getElementById('fileInput')?.click()}>
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
                        <Input
                            label="상품 이름"
                            placeholder="Ex. 차카니"
                            width={"44rem"}
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />

                        <TextArea
                            label="상품 설명"
                            placeholder="Ex. 추억의 차카니입니다."
                            width={"44rem"}
                            value={productDescription}
                            onChange={(e) => setProductDescription(e.target.value)}
                        />

                        <Text $fontType="SubTitle2">상품 종류</Text>
                        <ProductFilterTabs items={"등록"} onSelectCategory={setSelectedCategory} />

                        <StyledDiv>
                            <Input 
                                label="가격" 
                                placeholder="Ex. 1700" 
                                width={"22rem"}
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />

                        {/* 재고 유무 선택 부분 */}
                        <StockStateChange setIsStocked={setInStock} />
                        </StyledDiv>

                        <ButtonBox>
                            <CancelButton>취소</CancelButton>
                            <AddButton onClick={handleSubmit}>등록</AddButton>
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