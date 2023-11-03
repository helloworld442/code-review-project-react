import styled from "styled-components";
import QuestionPostsItem from "./QuestionPostsItem";
import QuestionPostsSelect from "./QuestionPostsSelect";
import { useState } from "react";
import useReviewStore from "../../hooks/useReviewStore";

const QuestionPostsList = () => {
  const selectMenu = ["Spring", "React", "Java", "JavaScript"];
  const [selectItem, setSelectItem] = useState("JavaScript");
  const [snapshot] = useReviewStore();

  const { items } = snapshot;

  const onToggleSelect = (item) => setSelectItem(item);

  if (!items) return <div>isLoaindg....</div>;

  return (
    <StQuestionPostsList>
      <QuestionPostsSelect
        trigger={selectItem}
        items={selectMenu}
        onToggleSelect={onToggleSelect}
      />

      {items.map((item) => (
        <QuestionPostsItem review={item} key={item.id} />
      ))}
    </StQuestionPostsList>
  );
};

const StQuestionPostsList = styled.ul`
  position: relative;
  padding-top: 64px;
  margin: 24px 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 18px;
`;

export default QuestionPostsList;
