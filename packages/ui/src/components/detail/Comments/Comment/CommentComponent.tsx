import styled from "styled-components";
import { Comment } from "ui/../../types/comment/comment";
import Text from "ui/components/Text";
import { color } from "ui/styles";

interface CommentProps {
  content: string;
  createdAt: string;
  commentId?: number;
}

export default function CommentComponent({
  content,
  createdAt,
}: CommentProps): JSX.Element {
  return (
    <Container>
      <Text $fontType="SubTitle3" style={{ fontWeight: "700" }}>
        {content}
      </Text>
      <Text
        $fontType="SubTitle3"
        style={{ fontWeight: "700", color: `${color.gray400}` }}
      >
        {createdAt.slice(0, 10)}
      </Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
