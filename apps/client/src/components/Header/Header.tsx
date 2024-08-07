"use client";

import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { color } from "ui/styles";
import AdminLoginModal from "./AdminLoginModal/AdminLoginModal";
import { PersonIcon } from "ui/icon";
import { UserContext } from "client/context/UserContext";

interface HeaderProps {}

function Header({}: HeaderProps): JSX.Element {
  const pathname = usePathname();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  if (typeof window !== "undefined") {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  return (
    <StyledHeader>
      <Nav>
        <Link href="/" $active={true}>
          <Text>와라! 매점</Text>
        </Link>
        {/* <Link href="/recommand" $active={pathname === "/recommand"}>
          가격대별 추천
        </Link> */}
        <Link href="/qna" $active={pathname === "/qna"}>
          Q&A
        </Link>
        {isLoggedIn && (
          <Link href="/manageProduct" $active={pathname === "/manageProduct"}>
            상품 관리
          </Link>
        )}

        {isLoggedIn ? (
          <AdminText>Admin</AdminText>
        ) : (
          <LoginIcon onClick={openModal}>
            <PersonIcon />
          </LoginIcon>
        )}

        {isModalOpen && (
          <AdminLoginModal isOpen={isModalOpen} onClose={closeModal} />
        )}
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
`;

const Nav = styled.nav`
  height: 100%;
  width: calc(100% - 4.5rem);
  display: flex;
  align-items: center;
  gap: 4rem;
`;

const Link = styled.a<{ $active: boolean }>`
  font-weight: 800;
  font-size: 1rem;
  color: ${(props) => (props.$active ? "black" : color.gray200)};
  font-family: "nanumSquareNeo";
  font-weight: 800;
  font-size: 20px;
  &:hover {
    color: "black";
    transition: 0.3s ease;
  }
`;

const Text = styled.p`
  font-size: 1.25rem;
  color: #000000;
  font-family: "nanumSquareNeo";
  font-weight: 800;
`;

const AdminText = styled(Text)`
  position: absolute;
  right: 7.5rem;
  font-size: 1rem;
  font-weight: 800;
`;

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
`;
