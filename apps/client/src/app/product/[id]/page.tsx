'use client'

import Comments from "client/components/detail/Comments/Comments";
import ProductBox from "client/components/detail/Product/Product";
import AppLayout from "client/layouts/AppLayout"
import { usePathname } from "next/navigation"
import styled from "styled-components"

export default function ProductDetail() {
  const pathname = usePathname();
  const id = Number(pathname.split('/').pop());

  return (
    <AppLayout>
      <Container>
        <ProductBox id={id}/>
        <Comments id={id}/>
      </Container>
    </AppLayout>
  )
}

const Container = styled.div`
  width: calc(100% - 12.5rem);
  height: calc(100vh - 4.375rem);
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  word-break: keep-all;
  margin: 0 auto;
`
