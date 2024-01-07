import React, { useMemo, useState } from "react";
import FilterTab from "./FilterTab/FilterTab";
import styled from "styled-components";
import { ProductCategory } from "../../../../types/product/product";

interface ProductListProps {
  items: "상품" | number;
  onSelectCategory: (category: string) => void;
}

// const defaultItems = ['전체', 'Chip', 'Beverage', 'IceCream', 'ProcessedFood', 'Etc'];

const CategoryMap = {
  전체: "전체",
  Chip: ProductCategory.Chip,
  Beverage: ProductCategory.Beverage,
  IceCream: ProductCategory.IceCream,
  ProcessedFood: ProductCategory.ProcessedFood,
  Etc: ProductCategory.Etc,
};

const getFilterItems = (items: "상품" | number): string[] => {
  return items === "상품"
    ? Object.keys(CategoryMap)
    : Array.from({ length: items as number }, (_, i) => `#${i + 1}`);
};

function FilterTabs({
  items,
  onSelectCategory,
}: ProductListProps): JSX.Element {
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
  );
}

export default FilterTabs;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem 1rem;
`;
