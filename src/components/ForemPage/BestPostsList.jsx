import styled from "styled-components";
import { device } from "../../utils/_media";
import BestPostsItem from "./BestPostsItem";
import { Pagnation } from "../ui/Pagnation";
import { useState } from "react";
import useReviewStore from "../../hooks/useReviewStore";

const BestPostsList = () => {
  const [currPage, setCurrPage] = useState(1);
  const [snapshot] = useReviewStore();

  const { items } = snapshot;

  if (!items) return <div>is Loading</div>;

  return (
    <>
      <StBestPostList>
        {items.slice(0, 6).map((item) => (
          <BestPostsItem review={item} key={item.id} />
        ))}
      </StBestPostList>

      <Pagnation
        currPage={currPage}
        setCurrPage={setCurrPage}
        totalPages={items.length}
        itemPerPages={6}
      />
    </>
  );
};

const StBestPostList = styled.div`
  margin-bottom: 36px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;

  @media ${device.tablet} {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default BestPostsList;
