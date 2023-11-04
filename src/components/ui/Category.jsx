import { css, styled } from "styled-components";
import { useState } from "react";
import { device } from "../../utils/_media";
import { Link } from "react-router-dom";

const Category = ({ index }) => {
  const [category, setCategory] = useState(index);

  return (
    <StCategory>
      <Link to="/forem">
        <CategoryTitle onClick={() => setCategory(0)} $active={category === 0}>
          전체
        </CategoryTitle>
      </Link>
      <Link to="/forem/best">
        <CategoryTitle onClick={() => setCategory(1)} $active={category === 1}>
          인기글
        </CategoryTitle>
      </Link>
      <Link to="/forem/question">
        <CategoryTitle onClick={() => setCategory(2)} $active={category === 2}>
          답변중
        </CategoryTitle>
      </Link>
    </StCategory>
  );
};

const StCategory = styled.div`
  flex: 2.5;
  height: 500px;
  margin-right: 12px;
  flex-direction: column;
  display: flex;

  @media ${device.tablet} {
    margin-right: 0;
    margin-bottom: 24px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

const CategoryTitle = styled.h2`
  padding: 12px 0;
  box-sizing: border-box;
  font-size: 1.4rem;
  font-weight: 550;
  color: rgb(64, 58, 107, 0.5);
  cursor: pointer;

  ${(props) =>
    props.$active &&
    css`
      color: #333;
    `}
  @media ${device.tablet} {
    font-size: 1.2rem;
  }
`;

export { Category };
