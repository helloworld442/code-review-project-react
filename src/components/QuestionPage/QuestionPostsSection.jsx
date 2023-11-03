import styled from "styled-components";
import QuestionPostsSearch from "./QuestionPostsSearch";
import QuestionPostsList from "./QuestionPostsList";

const QuestionPostsSection = () => {
  return (
    <StQuestionPostsSection>
      <PostsSectionTitle>답변을 기다리는 글</PostsSectionTitle>

      <PostsSectionDesc>
        답변을 기다리는 게시글들입니다. 처음으로 답변의 주인공이 !!
      </PostsSectionDesc>

      <QuestionPostsSearch />

      <QuestionPostsList />
    </StQuestionPostsSection>
  );
};

const StQuestionPostsSection = styled.section`
  width: 100%;
  height: auto;
`;

const PostsSectionTitle = styled.h3`
  margin-left: 14px;
  margin-bottom: 18px;
  font-size: 1.6rem;
  font-weight: 300;
`;

const PostsSectionDesc = styled.h5`
  margin-left: 14px;
  margin-bottom: 30px;
  font-size: 0.95rem;
  font-weight: 500;
  color: #666;
`;

export default QuestionPostsSection;
