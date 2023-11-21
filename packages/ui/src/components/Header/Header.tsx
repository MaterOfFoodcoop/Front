'use client'

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';
import { color } from 'ui/styles';
import Modal from './AdminLoginModal/AdminLoginModal';
import { PersonIcon } from 'ui/icon';

interface HeaderProps {}

function Header ({}: HeaderProps): JSX.Element {
  const pathname = usePathname();
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // if (isModalOpen) {
  //   document.body.style.overflow = 'hidden';
  // } else {
  //   document.body.style.overflow = 'auto';
  // }

  return (
      <StyledHeader>
        <Nav>
          <Link href='/'>
            <Text>와라! 매점</Text>
          </Link>
          <Link href='/recommand' $active={pathname === '/recommand'}>가격대별 추천</Link>
          <Link href='/qna' $active={pathname === '/qna'}>Q&A</Link>
          <LoginIcon onClick={openModal}>
            <PersonIcon />
          </LoginIcon>
          {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
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

 const Text = styled.p`
  font-weight: 800;
  font-size: 1.25rem;
  color: #000000;
  font-family: "nanumSquareNeo";
  font-weight: 800;
  font-size: 22px;
 `

 const LoginIcon = styled.button`
  position: absolute;
  right: 7.5rem;
  
   &:hover {
    cursor: pointer;
    .color {
      transition: all 0.3s ease;
      fill: ${color.gray600};
    }
   }
 `