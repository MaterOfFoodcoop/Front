import React, { useMemo, useState } from 'react';
import FilterTab from "./FilterTab/FilterTab";
import styled from 'styled-components';

interface ProductListProps {
  items: '상품' | number;
}

const defaultItems = ['전체', '과자', '음료', '아이스크림', '가공식품', '기타'];

const getFilterItems = (items: '상품' | number): string[] => {
  return items === '상품' ? defaultItems : Array.from({ length: items as number }, (_, i) => `#${i + 1}`);
};

function FilterTabs({ items }: ProductListProps): JSX.Element {
  const productItems = useMemo(() => getFilterItems(items), [items]);
  const [activeTab, setActiveTab] = useState(productItems[0]);

  return (
    <Container>
      {productItems.map((item, index) => (
        <FilterTab key={index} name={item} 
          $active={item === activeTab}
          onClick={() => setActiveTab(item)}
/>
      ))}
    </Container>
  );
};

export default FilterTabs;


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem 1rem;
`