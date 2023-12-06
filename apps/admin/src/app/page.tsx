'use client'

import FilterTabs from "ui/components/FilterTabs/FilterTabs";
import Products from "ui/components/Products/Products";
import SummaryContent from "ui/components/SummaryContent/SummaryContent";
import SearchBox from "ui/components/SearchBox/SearchBox";
import AppLayout from "admin/layouts/AppLayout";
import { UserProvider, UserContext } from "admin/context/UserContext";
import styled from "styled-components";

export default function Home() {
  return (
    <UserProvider>
      <AppLayout>
        <Container>
          <SummaryContent subject="와라! 매점" description="와라! 매점을 통해 매점 이용을 편리하게!"/>
          <SearchBox placeholder="원하는 상품을 검색해 보세요." buttonText="검색"/>
          <FilterTabs items={"상품"} />
          <Products/>
        </Container>
      </AppLayout>
    </UserProvider>
  )
}

const Container = styled.div`
  padding: 6rem 11.25rem;
`