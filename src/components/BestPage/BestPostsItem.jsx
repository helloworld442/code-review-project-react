import styled, { css } from "styled-components";
import { device } from "../../utils/_media";

const BestPostsItem = ({ review, index }) => {
  return (
    <StBestPostsItem $border={index % 2 === 0}>
      <BestPostsTitle>
        <span>{index + 1}</span>
        <a href={"/detail/" + review.id}>{review.title}</a>
      </BestPostsTitle>

      <BestPostsDesc>{review.problem}</BestPostsDesc>

      <BestPostsUser>
        <span></span>
        <h4>김민승</h4>
        <h5>2023.08.12</h5>
      </BestPostsUser>

      <BestPostsInfo>
        <h6>
          추천 <span>1</span>
        </h6>
        <h6>
          조회 <span>2</span>
        </h6>
      </BestPostsInfo>
    </StBestPostsItem>
  );
};

const StBestPostsItem = styled.li`
  position: relative;
  width: 100%;
  height: 220px;
  padding: 24px 14px;
  box-sizing: border-box;
  border-bottom: 2px solid #e8e8e8;

  ${(props) =>
    props.$border &&
    css`
      border-right: 2px solid #e8e8e8;
    `}

  @media ${device.tablet} {
    border-bottom: 2px solid #e8e8e8;
    border-right: none;
  }
`;

const BestPostsTitle = styled.h3`
  margin-bottom: 16px;
  font-size: 1.15rem;
  font-weight: 200;
  cursor: pointer;
  display: flex;
  align-items: center;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &:hover {
    color: rgb(64, 58, 107, 0.5);
  }

  span {
    margin-right: 14px;
    font-size: 2.2rem;
    font-weight: 400;
    color: rgb(64, 58, 107, 0.8);
  }
`;

const BestPostsDesc = styled.h5`
  margin-bottom: 24px;
  font-size: 0.825rem;
  font-weight: 650;
  font-family: Pretendard;
  color: #333;
  line-height: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BestPostsUser = styled.div`
  position: absolute;
  bottom: 20px;
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

const BestPostsInfo = styled.div`
  position: absolute;
  bottom: 26px;
  right: 14px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.95rem;

  span {
    color: rgb(64, 58, 107, 0.8);
  }
`;

export default BestPostsItem;
