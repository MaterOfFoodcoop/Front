'use client'

import { MAIN_PRODUCT_DATA } from 'ui/../../mocks/main/main';
import styled from "styled-components"
import Button from "ui/components/Button/SearchButton"
import ProductItem from '../../manageProduct/ProductItem/ProductItem'
import Link from 'next/link';
import { useState } from 'react';
import FilterTab from 'ui/components/FilterTabs/FilterTab/FilterTab';

const ProductFilters = ['과자', '음료', '아이스크림', '가공식품', '기타'];

function ProductFilterTabs(): JSX.Element {
    const [activeTab, setActiveTab] = useState(ProductFilters[0]);

    return (
        <Container>
            {ProductFilters.map((item, index) => (
                <FilterTab key={index} name={item} 
                $active={item === activeTab}
                onClick={() => setActiveTab(item)}
                />
            ))}
        </Container>
    )
}

export default ProductFilterTabs;


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1.75rem;
`