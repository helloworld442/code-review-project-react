import styled from "styled-components";
import { device } from "../../utils/_media";
import { Category } from "../ui/Category";
import QuestionBanner from "./QuestionBanner";
import QuestionPostsSection from "./QuestionPostsSection";
import CSSTransition from "../ui/CSSTranstion";
import useReviewStore from "../../hooks/useReviewStore";
import { useEffect } from "react";

const Question = () => {
  const [snapshot, reviewStore] = useReviewStore();

  useEffect(() => {
    reviewStore.getFetchData();

    return () => reviewStore.resetFetchData();
  }, []);

  return (
    <CSSTransition>
      <QuestionTemplate>
        <QuestionCol>
          <Category index={2} />

          <QuestionBox>
            <QuestionBanner />
            <QuestionPostsSection />
          </QuestionBox>
        </QuestionCol>
      </QuestionTemplate>
    </CSSTransition>
  );
};

const QuestionTemplate = styled.main`
  width: 100%;
  height: auto;
  background: #fff;
  display: flex;
  justify-content: center;
`;

const QuestionCol = styled.div`
  width: 1150px;
  height: auto;
  margin-top: 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  @media ${device.tablet} {
    width: 100%;
    padding: 0 10vw;
    flex-direction: column;
  }
`;

const QuestionBox = styled.div`
  flex: 21;
  height: auto;
`;

export default Question;
