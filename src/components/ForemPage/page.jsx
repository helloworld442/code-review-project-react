import styled from "styled-components";
import { device } from "../../utils/_media";
import { Category } from "../ui/Category";
import ForemBanner from "./ForemBanner";
import BestPostsSection from "./BestPostsSection";
import QuestionPostsSection from "./QuestionPostsSection";
import CSSTransition from "../ui/CSSTranstion";
import useReviewStore from "../../hooks/useReviewStore";
import { useEffect } from "react";

const Forem = () => {
  const [snapshot, reviewStore] = useReviewStore();

  useEffect(() => {
    reviewStore.getFetchData();

    return () => reviewStore.resetFetchData();
  }, []);

  return (
    <CSSTransition>
      <ForemLayout>
        <ForemCol>
          <Category index={0} />

          <ForemBox>
            <ForemBanner />
            <BestPostsSection />
            <QuestionPostsSection />
          </ForemBox>
        </ForemCol>
      </ForemLayout>
    </CSSTransition>
  );
};

const ForemLayout = styled.main`
  width: 100%;
  height: auto;
  background: #fff;
  display: flex;
  justify-content: center;
`;

const ForemCol = styled.div`
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

const ForemBox = styled.div`
  width: 980px;
  height: auto;

  @media ${device.tablet} {
    flex: 1;
    width: auto;
  }
`;

export default Forem;
