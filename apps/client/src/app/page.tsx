'use client'

import FilterTabs from "client/components/common/FilterTabs/FilterTabs";
import Products from "client/components/common/Products/Products";
import SummaryContent from "client/components/common/SummaryContent/SummaryContent";
import SearchBox from "client/components/main/SearchBox/SearchBox";
import AppLayout from "client/layouts/AppLayout";
import styled from "styled-components";
import Text from "ui/components/Text";

export default function Home() {
  return (
    <AppLayout>
      <Container>
        <SummaryContent subject="와라! 매점" description="와라! 매점을 통해 매점 이용을 편리하게!"/>
        <SearchBox />
        <FilterTabs items={"상품"} />
        <Products/>
      </Container>
    </AppLayout>
  )
}

const Container = styled.div`
  padding: 6rem 11.25rem;
`