'use client'

import styled from 'styled-components';
import { color } from 'ui/styles';

interface HeaderProps {}

function Header ({}: HeaderProps): JSX.Element {
    return (
      <StyledHeader>
        <Nav>
          <Logo href='/'>와라!매점</Logo>
          <Link href='/recommand'>가격대별 추천</Link>
          <Link href='/request'>Q&A</Link>
        </Nav>
      </StyledHeader>
    );
  }
  
export default Header;

const StyledHeader = styled.header`
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

const Logo = styled.a`
  font-weight: 800;
  font-size: 1.375rem;
  color: black;
`
const Link = styled.a`
  font-weight: 800;
  font-size: 1.25rem;
  color: ${color.gray200};
`
