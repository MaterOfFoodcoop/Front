import { Comment } from "client/types/comment/comment";
import styled from "styled-components";
import Text from "ui/components/Text";
import { color } from "ui/styles";

export default function CommentComponent({createdDate, comment} : Comment ): JSX.Element{
    return(
        <Container>
            <Text $fontType="SubTitle3" style={{fontWeight: '700'}}>{comment}</Text>
            <Text $fontType="SubTitle3" style={{fontWeight: '700', color:`${color.gray400}`}}>{createdDate}</Text>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`