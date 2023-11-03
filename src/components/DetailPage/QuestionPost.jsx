import styled from "styled-components";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-light.min.css";
import { ReactComponent as Heart } from "../../assets/heart-solid.svg";
import { useEffect, useState } from "react";

const QuestionPost = ({ data }) => {
  const [hightlightedCode, setHightlightedCode] = useState("");

  useEffect(() => {
    let hightcode = hljs.highlight(data.code, { language: "javascript" }).value;
    hightcode = hightcode.replace(/" "/g, "&nbsp; ");

    setHightlightedCode(hightcode);
  }, [data.code]);

  return (
    <StQuestionPost>
      <QuestionPostTitle>{data.title}</QuestionPostTitle>

      <QuestionPostDesc>
        {data.code && (
          <div className="question-code">
            <ul className="code-number">
              {data.code.split("\n")?.map((_, i) => (
                <li key={i}>{i + 1}</li>
              ))}
            </ul>
            <pre className="code-core javascript">
              <code dangerouslySetInnerHTML={{ __html: hightlightedCode }} />
            </pre>
          </div>
        )}
      </QuestionPostDesc>

      <QuestionPostDesc>
        <span className="question-category">문제상황</span>
        <pre className="question-problem">{data.problem}</pre>
      </QuestionPostDesc>
      <QuestionPostDesc>
        <span className="question-category">궁금한점</span>
        <pre className="question-question">{data.question}</pre>
      </QuestionPostDesc>
      <QuestionPostInfo>
        <h5>2022.09.21</h5>
        <span>
          <Heart />
          좋아요 0
        </span>
      </QuestionPostInfo>
    </StQuestionPost>
  );
};

const StQuestionPost = styled.div`
  width: 100%;
`;

const QuestionPostTitle = styled.h3`
  padding-bottom: 14px;
  margin-bottom: 36px;
  border-bottom: 2px solid #e8e8e8;
  font-size: 1.5rem;
  font-weight: 650;
  color: #333;
`;

const QuestionPostDesc = styled.h5`
  font-size: 1.3rem;

  .question-code {
    position: relative;
    right: 0;
    width: 100%;
    min-height: 300px;
    margin-bottom: 24px;
    border: none;
    outline: none;
    background: rgb(247, 246, 243);
    font-size: 1rem;
    font-weight: 400;
    font-family: monospace;
    color: #eee;
    z-index: 1;
    display: flex;
    justify-content: flex-start;

    .code-number {
      width: 5%;
      padding: 14px 0;
      margin: 0;
      box-sizing: border-box;
      font-size: 1.15rem;
      font-weight: 400;
      font-family: monospace;
      color: #888;
      background: rgb(247, 246, 243);
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      white-space: pre-wrap;
      overflow-y: hidden;
      line-height: 1.5rem;
    }

    .code-core {
      width: 95%;
      padding: 14px 12px;
      box-sizing: border-box;
      font-size: 1rem;
      font-weight: 400;
      font-family: monospace;
      color: #333;
      caret-color: #333;
      white-space: pre-wrap;
      overflow-y: hidden;
      line-height: 1.5rem;
    }
  }

  .question-category {
    display: inline-block;
    margin-bottom: 14px;
    font-size: 1.4rem;
    font-weight: 300;
    color: rgb(64, 58, 107, 0.8);
  }
  .question-problem,
  .question-question {
    margin-bottom: 24px;
    font-size: 1rem;
    font-weight: 550;
    font-family: Pretendard;
    line-height: 1.8rem;
  }

  & + & {
    margin-top: 14px;
  }
`;

const QuestionPostInfo = styled.div`
  margin-top: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h5 {
    font-size: 0.85rem;
    font-weight: 500;
    font-family: sans-serif;
    color: #888;
  }

  span {
    padding: 12px;
    box-sizing: border-box;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    display: flex;
    align-items: center;
    font-family: sans-serif;
    font-size: 0.95rem;
    color: #bbb;
    cursor: pointer;

    svg {
      margin-right: 12px;
      width: 1.25rem;
      height: 1.25rem;
      fill: #bbb;
    }

    &:hover {
      background: rgb(187, 187, 187, 0.1);
    }
  }
`;

export default QuestionPost;
