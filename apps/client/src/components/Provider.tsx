'use client';

import { GlobalStyle } from 'ui/styles';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Provider = ({ children }: Props) => {
  return (
    <>
        <GlobalStyle />
        {children}
    </>
  );
};

export default Provider;
