import styled from "styled-components";
import { device } from "../../utils/_media";
import { Category } from "../ui/Category";
import HomeBanner from "./HomeBanner";
import BestPostsSection from "./BestPostsSection";
import QuestionPostsSection from "./QuestionPostsSection";
import CSSTransition from "../ui/CSSTranstion";
import useReviewStore from "../../hooks/useReviewStore";
import { useEffect } from "react";

const Home = () => {
  const [snapshot, reviewStore] = useReviewStore();

  useEffect(() => {
    reviewStore.getFetchData();

    return () => reviewStore.resetFetchData();
  }, []);

  return (
    <CSSTransition>
      <HomeLayout>
        <HomeCol>
          <Category index={0} />

          <HomeBox>
            <HomeBanner />
            <BestPostsSection />
            <QuestionPostsSection />
          </HomeBox>
        </HomeCol>
      </HomeLayout>
    </CSSTransition>
  );
};

const HomeLayout = styled.main`
  width: 100%;
  height: auto;
  background: #fff;
  display: flex;
  justify-content: center;
`;

const HomeCol = styled.div`
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

const HomeBox = styled.div`
  flex: 3;
  height: auto;
`;

export default Home;
