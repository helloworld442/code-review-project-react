import styled from "styled-components";
import { device } from "../../utils/_media";

const QuestionPostsItem = ({ review }) => {
  return (
    <StQuestionPostsItem>
      <QuestionPostsTitle>
        <QuestionStatus>답변 진행중</QuestionStatus>
        <a href={"/detail/" + review.id}>{review.title}</a>
      </QuestionPostsTitle>

      <QuestionPostsDesc>{review.problem}</QuestionPostsDesc>

      <QuestionPostsUser>
        <span></span>
        <h4>김민승</h4>
        <h5>2023.08.12</h5>
      </QuestionPostsUser>

      <QuestionPostsPoint>
        <span>0</span>
        <h5>포인트</h5>
      </QuestionPostsPoint>
    </StQuestionPostsItem>
  );
};

const StQuestionPostsItem = styled.li`
  position: relative;
  width: 100%;
  height: 180px;
  padding: 24px 14px;
  box-sizing: border-box;
  border-bottom: 2px solid #e8e8e8;
`;

const QuestionStatus = styled.div`
  display: inline-block;
  padding: 8px 12px;
  margin-right: 14px;
  box-sizing: border-box;
  border: 3px solid #e8e8e8;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 400;
  color: #eee;
  background: rgb(64, 58, 107, 0.8);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const QuestionPostsTitle = styled.h3`
  margin-bottom: 16px;
  font-size: 1.15rem;
  font-weight: 200;
  cursor: pointer;
  display: flex;
  align-items: center;

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

const QuestionPostsDesc = styled.h5`
  width: 600px;
  margin-bottom: 24px;
  font-size: 0.825rem;
  font-weight: 650;
  font-family: Pretendard;
  color: #333;
  line-height: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${device.tablet} {
    width: 400px;
  }
`;

const QuestionPostsUser = styled.div`
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

const QuestionPostsPoint = styled.div`
  position: absolute;
  top: 50%;
  right: 36px;
  transform: translateY(-50%);
  width: 110px;
  height: 110px;
  border: 2px solid #e8e8e8;
  border-radius: 50%;
  font-weight: 300;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  span {
    font-size: 1.4rem;
    color: rgb(64, 58, 107, 0.8);
  }

  h5 {
    font-size: 1rem;
  }
`;

export default QuestionPostsItem;
