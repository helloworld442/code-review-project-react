import styled from "styled-components";
import BestPostsList from "./BestPostsList";
import BestPostsSelect from "./BestPostsSelect";
import { useState } from "react";

const BestPostsSection = () => {
  const selectMenu = ["Spring", "React", "Java", "JavaScript"];
  const [selectItem, setSelectItem] = useState("JavaScript");

  const onToggleSelect = (item) => setSelectItem(item);

  return (
    <StBestPostsSection>
      <PostsSectionTitle>인기글</PostsSectionTitle>

      <PostsSectionDesc>인기 있는 게시글들입니다. 지금 한 눈에 모아보세요.</PostsSectionDesc>

      <BestPostsSelect trigger={selectItem} items={selectMenu} onToggleSelect={onToggleSelect} />

      <BestPostsList />
    </StBestPostsSection>
  );
};

const StBestPostsSection = styled.section`
  position: relative;
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

export default BestPostsSection;
