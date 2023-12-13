'use client'

import SummaryContent from "ui/components/SummaryContent/SummaryContent"
import Questions from "ui/components/qna/Questions/Questions"
import SearchBox from "ui/components/SearchBox/SearchBox";
import AppLayout from "client/layouts/AppLayout"
import styled from "styled-components"
import Link from 'next/link';
import { useUser } from "client/context/UserContext";
import QnASearchBox from "client/components/qna/SearchBox/SearchBox";

export default function Qna(){
    const isLoggedIn = useUser();

    return(
        <AppLayout>
            <Container>
                <SummaryContent subject="Q&A" description="매점을 이용하면서 궁금했던/바라는 점을 물어볼 수 있어요."/>
                <Link href='/qna/write'>
                    {isLoggedIn ? (
                        <SearchBox placeholder="Q&A를 검색해 보세요." buttonText="검색" />
                    ) : (
                        <QnASearchBox/>
                    )}
                </Link>
                <Questions />
            </Container>
        </AppLayout>
    )
}

const Container = styled.div`
    padding: 6rem 11.25rem;   
`