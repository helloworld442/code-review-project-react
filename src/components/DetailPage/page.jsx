import styled from "styled-components";
import { device } from "../../utils/_media";
import CSSTransition from "../ui/CSSTranstion";
import QuestionUser from "./QuestionUser";
import QuestionPost from "./QuestionPost";
import AnswerForm from "./AnswerForm";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useReviewStore from "../../hooks/useReviewStore";

const Detail = () => {
  const { postId } = useParams();
  const [snapshot, reviewStore] = useReviewStore();

  const { item } = snapshot;

  useEffect(() => {
    reviewStore.getFetchItem(postId);

    return () => reviewStore.resetFetchData();
  }, []);

  if (!item) return <div>is Loading</div>;

  return (
    <CSSTransition>
      <DetailTemplate>
        <DetailCol>
          <DetailBox>
            <QuestionPost data={item} />
            <AnswerForm />
          </DetailBox>

          <QuestionUser />
        </DetailCol>
      </DetailTemplate>
    </CSSTransition>
  );
};

const DetailTemplate = styled.main`
  width: 100%;
  height: auto;
  background: #fff;
  display: flex;
  justify-content: center;
`;

const DetailCol = styled.div`
  width: 1150px;
  height: auto;
  margin-top: 80px;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  gap: 48px;

  @media ${device.tablet} {
    width: 100%;
    padding: 0 10vw;
    flex-direction: column;
  }
`;

const DetailBox = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
`;

export default Detail;
