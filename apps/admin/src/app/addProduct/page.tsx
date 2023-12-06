'use client'

import SummaryContent from "ui/components/SummaryContent/SummaryContent"
import AppLayout from "admin/layouts/AppLayout"
import { UserProvider } from "admin/context/UserContext"
import styled from "styled-components"


export default function addProduct(){
    return(
        <UserProvider>
            <AppLayout>
                <Container>
                    <SummaryContent subject="상품 추가" description="와라! 매점에 상품을 추가해 주세요."/>
                </Container>
            </AppLayout>
        </UserProvider>
    )
}

const Container = styled.div`
    padding: 6rem 11.25rem;   
`