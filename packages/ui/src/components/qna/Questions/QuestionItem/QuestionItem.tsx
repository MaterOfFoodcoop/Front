'use client'

import useBooleanState from 'client/hooks/useBooleanState';
import { QNA_ANSWER_DATA } from 'ui/../../mocks/qna/answer';
import { Question } from 'ui/../../types/question/question';
import styled from 'styled-components';
import Text from 'ui/components/Text';
import { color } from 'ui/styles';

function QuestionItem ({id, title, createdDate, isAnswered, content}: Question ): JSX.Element {
    const { value: isOpen, toggle: toggleOpen } = useBooleanState();

    function getAnswerByQuestionId(id: number) {
      return QNA_ANSWER_DATA.find(answer => answer.id === id);
    }
    
    const answer = getAnswerByQuestionId(id);
  
    return (
      <Container>
        <QuestionContainer onClick={toggleOpen} $isOpen={isOpen}>
          <Text $fontType='Header3'><Icon>Q.</Icon></Text>

          <Contents>
          <Preview>
            <Text $fontType='SubTitle1' style={{whiteSpace: 'normal'}}>{title}</Text>
            <Text $fontType='SubTitle2' color={`${color.gray700}`}>{createdDate}</Text>
            {isAnswered && <Text $fontType='SubTitle2' color='#AFEB80'>답변됨</Text>}
          </Preview>

          {isOpen && (
            <Text $fontType='Body'>{content}</Text>
          )}
          </Contents>
        </QuestionContainer>

        {isOpen &&answer && (
          <AnswerContainer>
            <Text $fontType='Header3'><Icon>A.</Icon></Text>
            <Text $fontType='Body'>{answer.content}</Text>
         </AnswerContainer>
          )}
      </Container>
    );
  }
  
export default QuestionItem;

interface ContainerProps {
  $isOpen: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const QuestionContainer = styled.div<ContainerProps>` 
  width: 100%;
  min-height: fit-content;
  min-width: fit-content;
  border-radius: 30px;
  padding: 3rem;
  word-break: keep-all;
  border: 2px solid ${props => props.$isOpen ? `#FFF7D0` : `${color.gray100}`};
  display: flex;
  gap: 1.25rem;
`

const AnswerContainer = styled.div`
  width: 100%;
  min-height: fit-content;
  min-width: fit-content;
  border-radius: 30px;
  padding: 3rem;
  word-break: ke  ep-all;
  border: 2px solid #FFF7D0;
  background-color: #FFFEF8;
  display: flex;
  gap: 1.25rem;
`

const Icon = styled.span`
  color: ${color.yellow};
  font-size: 1.75rem;
`

const Contents = styled.div` 
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

const Preview = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
`
