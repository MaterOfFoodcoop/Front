'use client'

import { MAIN_PRODUCT_DATA } from 'ui/../../mocks/main/main';
import styled from "styled-components"
import Button from "ui/components/Button/SearchButton"
import ProductItem from '../../manageProduct/ProductItem/ProductItem'
import Link from 'next/link';
import { useState } from 'react';
import FilterTab from 'ui/components/FilterTabs/FilterTab/FilterTab';
import { ProductCategory } from 'types/product/product';
import { useMemo } from 'react';

interface ProductListProps {
    items: '상품' | number;
    onSelectCategory: (category: string) => void;
  }

const CategoryMap = {
    '전체': '전체',
    'Chip': ProductCategory.Chip,
    'Beverage': ProductCategory.Beverage,
    'IceCream': ProductCategory.IceCream,
    'ProcessedFood': ProductCategory.ProcessedFood,
    'Etc': ProductCategory.Etc,
  };

  const getFilterItems = (items: '상품' | number): string[] => {
    return items === '상품' ? Object.keys(CategoryMap) : Array.from({ length: items as number }, (_, i) => `#${i + 1}`);
  };

function ProductFilterTabs({ items, onSelectCategory }: ProductListProps): JSX.Element {
    const productItems = useMemo(() => getFilterItems(items), [items]);
    const [activeTab, setActiveTab] = useState(productItems[0]);

    return (
        <Container>
            {productItems.map((item, index) => (
                <FilterTab
                key={index}
                name={CategoryMap[item]}
                $active={item === activeTab}
                onClick={() => {
                    setActiveTab(item);
                    onSelectCategory(item);
                }}
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

function onSelectCategory(item: string) {
    throw new Error('Function not implemented.');
}
