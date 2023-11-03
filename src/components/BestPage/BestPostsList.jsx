import styled from "styled-components";
import { device } from "../../utils/_media";
import BestPostsItem from "./BestPostsItem";
import BestPostsSelect from "./BestPostsSelect";
import { useState } from "react";
import useReviewStore from "../../hooks/useReviewStore";

const BestPostsList = () => {
  const selectMenu = ["Spring", "React", "Java", "JavaScript"];
  const [selectItem, setSelectItem] = useState("JavaScript");
  const [snapshot] = useReviewStore();

  const { items } = snapshot;

  const onToggleSelect = (item) => setSelectItem(item);

  if (!items) return <div>is loading</div>;

  return (
    <StBestPostsList>
      <BestPostsSelect trigger={selectItem} items={selectMenu} onToggleSelect={onToggleSelect} />

      {items.map((item, index) => (
        <BestPostsItem review={item} key={item.id} index={index} />
      ))}
    </StBestPostsList>
  );
};

const StBestPostsList = styled.ul`
  position: relative;
  padding-top: 64px;
  margin: 24px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default BestPostsList;
