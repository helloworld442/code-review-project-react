import styled from "styled-components";
import { ReactComponent as Earth } from "../../assets/earth-asia-solid.svg";

export const HomeDashBoard = () => {
  return (
    <StHomeDashBoard>
      <DashBaordLeftItem>
        <h3>코드 리뷰 사이트 별무리</h3>
        <h5>코드 리뷰의 장!! 별무리 입니다. 리뷰를 남기고 확인해보세요!</h5>
        <a>Learn More</a>
      </DashBaordLeftItem>

      <DashBoardRightItem>
        <Earth />
      </DashBoardRightItem>
    </StHomeDashBoard>
  );
};

const StHomeDashBoard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 48px 64px;
  box-sizing: border-box;
  background: rgb(242, 236, 254);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DashBaordLeftItem = styled.div`
  h3 {
    margin-bottom: 24px;
    font-size: 2.4rem;
    font-weight: 400;
    color: #333;
  }

  h5 {
    margin-bottom: 36px;
    font-size: 0.85rem;
    font-weight: 650;
    font-family: sans-serif;
    line-height: 2rem;
    color: #333;
  }

  a {
    padding: 12px 20px;
    border-radius: 4px;
    background: #403a6b;
    color: #fff;
    font-size: 0.95rem;
  }
`;

const DashBoardRightItem = styled.div`
  position: absolute;
  top: 50%;
  right: 64px;
  transform: translateY(-50%);
  svg {
    width: 10.5rem;
    height: 10.5rem;
    fill: #403a6b;
  }
`;
