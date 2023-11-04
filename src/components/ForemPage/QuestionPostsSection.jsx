import styled from "styled-components";
import QuestionPostsList from "./QuestionPostsList";
import { useState } from "react";
import QuestionPostsSelect from "./QuestionPostsSelect";

const QuestionPostsSection = () => {
  const selectMenu = ["Spring", "React", "Java", "JavaScript"];
  const [selectItem, setSelectItem] = useState("JavaScript");

  const onToggleSelect = (item) => setSelectItem(item);

  return (
    <StQuestionPostsSection>
      <PostsSectionTitle>답변을 기다리는 글</PostsSectionTitle>

      <PostsSectionDesc>
        답변을 기다리는 게시글들입니다. 처음으로 답변의 주인공이 !!
      </PostsSectionDesc>

      <QuestionPostsSelect
        trigger={selectItem}
        items={selectMenu}
        onToggleSelect={onToggleSelect}
      />

      <QuestionPostsList />
    </StQuestionPostsSection>
  );
};

const StQuestionPostsSection = styled.section`
  position: relative;
  width: 100%;
  margin-bottom: 48px;
`;

const PostsSectionTitle = styled.h2`
  margin-bottom: 18px;
  font-size: 1.6rem;
  font-weight: 300;
`;

const PostsSectionDesc = styled.h4`
  margin-bottom: 24px;
  font-size: 0.95rem;
  font-weight: 500;
  color: #666;
`;

export default QuestionPostsSection;
