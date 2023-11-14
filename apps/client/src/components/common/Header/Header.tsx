'use client'

import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { color } from 'ui/styles';

interface HeaderProps {}

function Header ({}: HeaderProps): JSX.Element {
  const pathname = usePathname();
  return (
      <StyledHeader>
        <Nav>
          <Link href='/' $active={pathname === '/'}> 와라!매점</Link>
          <Link href='/recommand' $active={pathname === '/recommand'}>가격대별 추천</Link>
          <Link href='/request' $active={pathname === '/request'}>Q&A</Link>
        </Nav>
      </StyledHeader>
    );
  }
  
export default Header;

const StyledHeader = styled.header`
  z-index: 1;
  position: sticky;
  top: 0;
  width: 100%;
  height: 4.375rem;
  display: flex;
  justify-content: center;
  color: ${color.gray200};
  border-bottom: 1px solid ${color.gray200};
  padding: 0 2rem;
  background-color: white;
`

const Nav = styled.nav`
  height: 100%;
  width: calc(100% - 4.5rem);
  display: flex;
  align-items: center;
  gap: 4rem;
`

const Link = styled.a<{ $active: boolean }>`
  font-weight: 800;
  font-size: 1.25rem;
  color: ${props => (props.$active ? 'black' : color.gray200)};
  font-family: "nanumSquareNeo";
  font-weight: 800;
  font-size: 20px;
`