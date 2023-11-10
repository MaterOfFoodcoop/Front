'use client'

import styled from 'styled-components';

interface ContentProps {
  subject: string;
  description: string;
}

function SummaryContent ({subject, description}: ContentProps): JSX.Element {
    return (
      <Content>
        <Subject>{subject}</Subject>
        <Description>{description}</Description>
      </Content>
    );
  }
  
export default SummaryContent;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Subject = styled.h1`
  font-weight: 800;
  font-size: 2.25rem;
`

const Description = styled.p`
  font-weight: 400;
  font-size: 1.875rem;
`