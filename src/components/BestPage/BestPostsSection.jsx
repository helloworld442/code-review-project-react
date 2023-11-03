import styled from "styled-components";
import BestPostsList from "./BestPostsList";
import BestPostsSearch from "./BestPostsSearch";

const BestPostsSection = () => {
  return (
    <StBestPostsSection>
      <PostsSectionTitle>인기글 검색</PostsSectionTitle>

      <PostsSectionDesc>
        태그를 활용한 인기글 검색입니다! 지금 검색을 통해 별무리 회원들의 인기글을 확인해보세요!
      </PostsSectionDesc>

      <BestPostsSearch />

      <BestPostsList />
    </StBestPostsSection>
  );
};

const StBestPostsSection = styled.section`
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

export default BestPostsSection;
