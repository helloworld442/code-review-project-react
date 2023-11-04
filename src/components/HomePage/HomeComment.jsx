import styled from "styled-components";
import { ReactComponent as Ellipsis } from "../../assets/ellipsis-vertical-solid.svg";

const CommentItem = () => {
  return (
    <StCommentItem>
      <CommentItemTitle>이거는 요런 방식을 하면 좋을 거 같습니다.</CommentItemTitle>

      <CommentItemPoint />

      <CommentItemEllipsis />

      <CommentItemUser>
        <span></span>
        <h4>김민승</h4>
        <h5>2022.08.12</h5>
      </CommentItemUser>

      <CommentItemInfo>
        <h6>
          추천 <span>1</span>
        </h6>
        <h6>
          조회 <span>2</span>
        </h6>
      </CommentItemInfo>
    </StCommentItem>
  );
};

export const HomeComment = () => {
  return (
    <HomeCommentSection>
      <SectionTitle>Comments</SectionTitle>

      <SectionContent>
        <ContentTitle>@ 자바스크립트가 어렵네요</ContentTitle>

        <ContentMenu>
          <CommentItem />

          <CommentItem />

          <CommentItem />
        </ContentMenu>
      </SectionContent>
    </HomeCommentSection>
  );
};

const HomeCommentSection = styled.section`
  width: 100%;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 750;
  font-family: Pretendard;
  color: rgb(64, 58, 107, 0.8);
`;

const SectionContent = styled.div`
  margin: 30px 0;
`;

const ContentTitle = styled.span`
  padding: 12px 24px;
  box-sizing: border-box;
  border: 1px solid #e1e3e7;
  font-size: 1.4rem;
  font-weight: 200;
  color: rgb(64, 58, 107, 0.8);
  text-decoration: underline;
  text-underline-position: under;
  cursor: pointer;
`;

const ContentMenu = styled.ul`
  padding: 36px 12px;
  margin: 12px;
  box-sizing: border-box;
  border-left: 1px solid #e1e3e7;
`;

const StCommentItem = styled.li`
  position: relative;
  width: 100%;
  height: 150px;
  padding: 12px;
  margin: 30px 12px;
  box-sizing: border-box;
  border: 2px solid #e8e8e8;
  border-radius: 6px;
  background: #fff;
`;

const CommentItemTitle = styled.h5`
  white-space: pre-wrap;
  line-height: 2.5rem;
  font-size: 0.95rem;
  font-weight: 800;
  font-family: sans-serif;
  color: #333;
`;

const CommentItemPoint = styled.span`
  position: absolute;
  top: 12px;
  left: -33px;
  display: inline-block;
  width: 0.825rem;
  height: 0.825rem;
  border-radius: 50%;
  background: rgb(64, 58, 107, 0.8);
`;

const CommentItemEllipsis = styled(Ellipsis)`
  position: absolute;
  top: 18px;
  right: 12px;
  width: 1.4rem;
  height: 1.4rem;
  fill: rgb(64, 58, 107, 0.8);
  cursor: pointer;
`;

const CommentItemUser = styled.div`
  position: absolute;
  bottom: 14px;
  left: 14px;
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 12px;
    border: 2px solid #eee;
    border-radius: 100%;
    background: #403a6b;
  }

  h5 {
    padding-left: 6px;
    margin-left: 6px;
    border-left: 1.5px solid #888;
    font-size: 0.825rem;
    font-weight: 500;
    font-family: sans-serif;
    color: #888;
  }
`;

const CommentItemInfo = styled.div`
  position: absolute;
  bottom: 18px;
  right: 14px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  font-size: 1rem;

  span {
    color: rgb(64, 58, 107, 0.8);
  }
`;
