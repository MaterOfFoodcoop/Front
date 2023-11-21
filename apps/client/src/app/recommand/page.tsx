'use client'

import FilterTabs from "ui/components/FilterTabs/FilterTabs";
import Products from "ui/components/Products/Products";
import SummaryContent from "ui/components/SummaryContent/SummaryContent";
import PriceSlider from "client/components/recommand/PriceSlider/PriceSlider";
import AppLayout from "client/layouts/AppLayout";
import styled from "styled-components";

function Recommand(){
    return(
        <AppLayout>
            <Container>
                <SummaryContent subject="가격대별 추천" description="원하는 가격대와 맞는 상품 조합을 추천해 드릴게요." />
                <PriceSlider />
                <FilterTabs items={4} />
                <Products/>
            </Container>
        </AppLayout>
    )
}

export default Recommand;

const Container = styled.div`
    padding: 6rem 11.25rem;   
`