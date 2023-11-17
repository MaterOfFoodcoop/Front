'use client'

import { LikeIcon } from 'ui/icon';
import { DETAIL_COMMENT_DATA } from 'client/mocks/detail/comments';
import { Comment } from 'client/types/comment/comment';
import { useState } from 'react';
import styled from 'styled-components';
import Text from 'ui/components/Text';
import { color, font } from 'ui/styles';
import CommentComponent from './Comment/CommentComponent';
import Button from 'ui/components/Button';

interface CommentsProps {
  id: number;
}

function Comments ({id}: CommentsProps): JSX.Element {
    const dummydata = DETAIL_COMMENT_DATA;
    const [commentData, setCommentData] = useState<Comment[]>(dummydata);

    return (
      <Container>
        <CommentsBox>
        {commentData.map((data, idx) => (
          <CommentComponent key={idx} {...data} />
          ))
        }
        </CommentsBox>
        <WriteBox>
          <Input />
          <WriteButton>작성</WriteButton>
        </WriteBox>
      </Container>
    );
  }
  
export default Comments;

const Container = styled.div` 
  height: 30rem;
  width: 70%;
  min-width: fit-content;
  border-radius:30px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-break: keep-all;
  box-shadow: 0px 0px 4px 0px #73737340;
`


const CommentsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar{
    display:none;
  }
`

const WriteBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

const Input = styled.input`
  outline: none;
  border: none;
  height: 3rem;
  width: 100%;
  border: 3px solid ${color.gray100};
  border-radius: 10px;
  padding: 2px 20px;
  font-size: 1rem;

  transition: 0.3s ease;
  &:focus-within{
      border-color: ${color.gray400};  
  }
`

const WriteButton = styled.button`
  color: ${color.gray200};
  border: 3px solid ${color.gray50};
  border-radius: 10px;
  height: 3rem;
  font-family: "nanumSquareNeo";
  font-weight: 700;
  font-size: 1rem;
  padding: 0 20px;

  transition: 0.3s ease;
  &:hover{
      border-color: ${color.gray400};  
      color: ${color.gray400};
  }
`
