import styled from "styled-components";
import { ReactComponent as Heart } from "../../assets/heart-solid.svg";
import { ReactComponent as Ellipsis } from "../../assets/ellipsis-vertical-solid.svg";

const AnswerComment = () => {
  return (
    <StAnswerComment>
      <AnswerCommentInfo>
        <span></span>
        <h4>김민승</h4>
        <h5>2022.08.12</h5>
      </AnswerCommentInfo>
      <AnswerCommentEllipsis />
      <AnswerCommentContent>이거는 요런 방식을 하면 좋을 거 같습니다.</AnswerCommentContent>
      <AnswerCommentReplay>답글 0</AnswerCommentReplay>
      <AnswerCommentHeart />
    </StAnswerComment>
  );
};

const StAnswerComment = styled.div`
  position: relative;
  width: 100%;
  padding: 12px;
  margin: 30px auto;
  box-sizing: border-box;
  border: 2px solid #e8e8e8;
  border-radius: 6px;
  background: #fff;
`;

const AnswerCommentInfo = styled.div`
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

const AnswerCommentEllipsis = styled(Ellipsis)`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 1.4rem;
  height: 1.4rem;
  fill: rgb(64, 58, 107, 0.8);
  cursor: pointer;
`;

const AnswerCommentContent = styled.pre`
  margin: 12px 0;
  white-space: pre-wrap;
  line-height: 2.5rem;
  font-size: 0.9rem;
  font-weight: 800;
  font-family: sans-serif;
  color: #333;
`;

const AnswerCommentReplay = styled.div`
  display: inline-block;
  padding: 8px 12px;
  font-size: 0.9rem;
  font-weight: 400;
  color: #888;
  border: 2px solid #888;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: #333;
    border: 2px solid #333;
  }
`;

const AnswerCommentHeart = styled(Heart)`
  position: absolute;
  bottom: 12px;
  right: 16px;
  width: 1.4rem;
  height: 1.4rem;
  fill: #bbb;
  cursor: pointer;

  &:hover {
    fill: rgb(64, 58, 107, 0.8);
  }
`;

export default AnswerComment;
