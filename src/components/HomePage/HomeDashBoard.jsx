import styled from "styled-components";
import { ReactComponent as Earth } from "../../assets/earth-asia-solid.svg";

export const HomeDashBoard = () => {
  return (
    <HomeDashBoardSection>
      <SectionTitle>DashBoard</SectionTitle>

      <SectionContent>
        <DashBaordLeftItem>
          <h3>코드 리뷰 사이트 별무리</h3>
          <h5>코드 리뷰의 장!! 별무리 입니다. 리뷰를 남기고 확인해보세요!</h5>
          <a>Learn More</a>
        </DashBaordLeftItem>

        <DashBoardRightItem>
          <Earth />
        </DashBoardRightItem>
      </SectionContent>
    </HomeDashBoardSection>
  );
};

const HomeDashBoardSection = styled.section`
  margin: 36px 0;
`;

const SectionTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 1.4rem;
  font-weight: 750;
  font-family: Pretendard;
  color: rgb(64, 58, 107, 0.8);
`;

const SectionContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 48px 64px;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background: rgb(64, 58, 107, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DashBaordLeftItem = styled.div`
  h3 {
    margin-bottom: 24px;
    font-size: 2.4rem;
    font-weight: 400;
    color: #fff;
  }

  h5 {
    margin-bottom: 36px;
    font-size: 0.85rem;
    font-weight: 650;
    font-family: sans-serif;
    line-height: 2rem;
    color: rgb(242, 236, 254);
  }

  a {
    padding: 12px 20px;
    border-radius: 4px;
    background: #fff;
    color: #333;
    font-size: 0.95rem;
    cursor: pointer;
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
    fill: rgb(242, 236, 254);
  }
`;
