'use client'

import SummaryContent from "client/components/common/SummaryContent/SummaryContent"
import Questions from "client/components/qna/Questions/Questions"
import SearchBox from "client/components/qna/SearchBox/SearchBox"
import AppLayout from "client/layouts/AppLayout"
import styled from "styled-components"


export default function Qna(){
    return(
        <AppLayout>
            <Container>
                <SummaryContent subject="Q&A" description="매점을 이용하면서 궁금했던/바라는 점을 물어볼 수 있어요."/>
                <SearchBox />
                <Questions />
            </Container>
        </AppLayout>
    )
}

const Container = styled.div`
    padding: 6rem 11.25rem;   
`