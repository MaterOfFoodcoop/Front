'use client'

import FilterTabs from "ui/components/FilterTabs/FilterTabs";
import Products from "ui/components/Products/Products";
import SummaryContent from "ui/components/SummaryContent/SummaryContent";
import SearchBox from "ui/components/main/SearchBox/SearchBox";
import AppLayout from "client/layouts/AppLayout";
import styled from "styled-components";

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