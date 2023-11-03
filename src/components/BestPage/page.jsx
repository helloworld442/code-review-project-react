import styled from "styled-components";
import { device } from "../../utils/_media";
import { Category } from "../ui/Category";
import BestBanner from "./BestBanner";
import BestPostsSection from "./BestPostsSection";
import CSSTransition from "../ui/CSSTranstion";
import useReviewStore from "../../hooks/useReviewStore";
import { useEffect } from "react";

const Best = () => {
  const [snapshot, reviewStore] = useReviewStore();

  useEffect(() => {
    reviewStore.getFetchData();

    return () => reviewStore.resetFetchData();
  }, []);

  return (
    <CSSTransition>
      <BestTemplate>
        <BestCol>
          <Category index={1} />

          <BestBox>
            <BestBanner />
            <BestPostsSection />
          </BestBox>
        </BestCol>
      </BestTemplate>
    </CSSTransition>
  );
};

const BestTemplate = styled.main`
  width: 100%;
  height: auto;
  background: #fff;
  display: flex;
  justify-content: center;
`;

const BestCol = styled.div`
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

const BestBox = styled.div`
  flex: 21;
  height: auto;
`;

export default Best;
