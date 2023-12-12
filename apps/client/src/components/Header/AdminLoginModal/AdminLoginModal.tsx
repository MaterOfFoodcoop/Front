import { useState } from "react";
import styled from "styled-components";

import { color, font } from "ui/styles";
import { WriteButton } from "ui/components";
import { HamburgerIcon, CloseIcon } from "ui/icon";
import { useLoginMutation } from "apis/auth/mutation";
import { useRouter } from "next/navigation";

interface AdminLoginProps {
  isOpen: boolean;
  onClose: () => void;
}

function AdminLoginModal({ isOpen, onClose }: AdminLoginProps) {
  const router = useRouter();
  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });
  const loginMutate = useLoginMutation(loginUserData);
  const handleLoginUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginUserData({ ...loginUserData, [name]: value });
  };
  const loginClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    loginMutate.mutate();
    onClose();
  };

  return (
    <>
      {isOpen ? (
        <Container>
          <ModalBox>
            <IconArea>
              <HamburgerIcon />
            </IconArea>

            <Content>
            <CloseBtn onClick={() => onClose()}>
              <CloseIcon />
            </CloseBtn>

              <TitleArea>
                <Title>와라! 매점</Title>
                <Subtitle>관리자 계정으로 로그인</Subtitle>
              </TitleArea>

              <InfoForm>
                <InfoInputBox>
                  <InfoInputLabel htmlFor="useremail">이메일</InfoInputLabel>
                  <InfoInput
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleLoginUserData}
                  />
                </InfoInputBox>
                <InfoInputBox>
                  <InfoInputLabel>비밀번호</InfoInputLabel>
                  <InfoInput
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleLoginUserData}
                  />
                </InfoInputBox>

                <ButtonArea>
                  <WriteButton
                    style={{ backgroundColor: "#f9f9f9" }}
                    onClick={(e) => loginClickHandler(e)}
                  >
                    로그인
                  </WriteButton>
                </ButtonArea>
              </InfoForm>
            </Content>
          </ModalBox>
        </Container>
      ) : null}
    </>
  );
}

export default AdminLoginModal;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  z-index: 250;

  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const IconArea = styled.div`
  width: 23.6rem;
  height: 43rem;

  background-color: ${color.yellow};
  border-radius: 20px 0px 0px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 40rem;
  height: 43rem;

  background-color: white;
  border-radius: 0px 20px 20px 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CloseBtn = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  align-self: flex-end;
  margin: 72px 63px 0px 0px;
`;

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-self: flex-start;
  margin: 1rem 0rem 3.3rem 3.88rem;
`;

const Title = styled.p`
  ${font.Header1};
  color: black;
`;

const Subtitle = styled.p`
  ${font.SubTitle1};
  color: black;
`;

const InfoForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 41px;
`;

const InfoInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoInputLabel = styled.label`
  ${font.SubTitle2};
  color: black;
`;

const InfoInput = styled.input`
  width: 31rem;
  height: 3.8rem;
  font-size: 1rem;

  background-color: ${color.gray50};
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 16px 20px;

  &::placeholder {
    ${font["Placeholder"]};
    color: ${color.gray400};
  }
`;

const ButtonArea = styled.div`
  margin-top: 57px;
  align-self: center;
`;
