'use client';

import Header from 'ui/components/Header/Header';
import type { ReactNode } from 'react';
import { styled } from 'styled-components';

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <StyledAppLayout>
      <Header />
      <Section>{children}</Section>
    </StyledAppLayout>
  );
};

export default AppLayout;

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100vh;
`;

const Section = styled.section`
  flex: 1;
  min-width: fit-content;
  overflow: auto;
`;