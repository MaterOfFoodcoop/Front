"use client";

import styled from "styled-components";
import { Comment } from "ui/../../types/comment/comment";
import Text from "ui/components/Text";
import { color } from "ui/styles";
import { useContext } from "react";
import { UserContext } from "client/context/UserContext";
import { useDeleteCommentMutation } from "apis/comment/mutation";

interface CommentProps {
  content: string;
  createdAt: string;
  commentId?: number;
}

export default function CommentComponent({
  content,
  createdAt,
  commentId,
}: CommentProps): JSX.Element {
  const { isLoggedIn } = useContext(UserContext);

  const deleteCommentMutation = useDeleteCommentMutation(commentId);

  const handleDeleteClick = () => {
    if (commentId != null) {
      deleteCommentMutation.mutate();
    }
  };

  return (
    <Container>
      <LeftBox>
        <Text $fontType="SubTitle3" style={{ fontWeight: "700" }}>
          {content}
        </Text>
        <Text
          $fontType="SubTitle3"
          style={{ fontWeight: "700", color: `${color.gray400}` }}
        >
          {createdAt.slice(0, 10)}
        </Text>
      </LeftBox>
      {isLoggedIn && (
        <div onClick={handleDeleteClick}>
          <Text
            $fontType="Button"
            style={{
              fontWeight: "700",
              color: `${color.red}`,
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            삭제
          </Text>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
