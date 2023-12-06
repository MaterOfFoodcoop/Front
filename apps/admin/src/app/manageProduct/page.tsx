'use client'

import SummaryContent from "ui/components/SummaryContent/SummaryContent"
import AppLayout from "admin/layouts/AppLayout"
import { UserProvider } from "admin/context/UserContext"
import styled from "styled-components"


export default function manageProduct(){
    return(
        <UserProvider>
            <AppLayout>
                <Container>
                    <SummaryContent subject="상품 관리" description="와라! 매점에 있는 상품을 관리할 수 있어요."/>
                </Container>
            </AppLayout>
        </UserProvider>
    )
}

const Container = styled.div`
    padding: 6rem 11.25rem;   
`