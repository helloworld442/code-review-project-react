import styled from "styled-components";
import { ReactComponent as Earth2 } from "../../assets/earth-africa-solid.svg";

const BestBanner = () => {
  return (
    <StBestBanner>
      <div className="banner-left-item">
        <h3 className="item-title">코드 리뷰 인기글</h3>
        <h5 className="item-sub-title">
          수 많은 분들의 찬사를 받은 인기글입니다. 지금 한 눈에 모아보세요!!
        </h5>
      </div>
      <div className="banner-right-item">
        <Earth2 id="earth2" />
      </div>
    </StBestBanner>
  );
};

const StBestBanner = styled.div`
  width: 100%;
  height: 160px;
  padding: 24px;
  margin-bottom: 48px;
  box-sizing: border-box;
  background: rgb(255, 241, 232);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .banner-left-item {
    .item-title {
      margin-bottom: 8px;
      font-size: 1.5rem;
      font-weight: 400;
      color: #333;
    }

    .item-sub-title {
      font-size: 0.925rem;
      font-weight: 550;
      font-family: sans-serif;
      line-height: 2rem;
      color: #333;
    }
  }

  .banner-right-item {
    svg {
      width: 7rem;
      height: 7rem;
      fill: #964b00;
    }
  }
`;

export default BestBanner;
