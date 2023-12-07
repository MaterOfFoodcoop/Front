'use client'

import SummaryContent from "ui/components/SummaryContent/SummaryContent"
import Questions from "ui/components/qna/Questions/Questions"
import SearchBox from "ui/components/SearchBox/SearchBox"
import AppLayout from "admin/layouts/AppLayout"
import { UserProvider } from "admin/context/UserContext"
import styled from "styled-components"


export default function Qna(){
    return(
        <UserProvider>
            <AppLayout>
                <Container>
                    <SummaryContent subject="Q&A" description="매점을 이용하면서 궁금했던/바라는 점을 물어볼 수 있어요."/>
                    <SearchBox placeholder="Q&A를 검색해 보세요." />
                    <Questions />
                </Container>
            </AppLayout>
        </UserProvider>
    )
}

const Container = styled.div`
    padding: 6rem 11.25rem;   
`