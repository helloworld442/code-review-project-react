import styled, { css } from "styled-components";
import { ReactComponent as Earth } from "../../assets/earth-oceania-solid.svg";
import { ReactComponent as Earth2 } from "../../assets/earth-africa-solid.svg";
import { ReactComponent as Earth3 } from "../../assets/earth-asia-solid.svg";
import { useEffect, useState } from "react";

const ForemBanner = () => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % 3);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [page]);

  const onClickRadio = (page) => setPage(page);

  return (
    <StForemBanner>
      <BannerList>
        <BannerItem movePage={page} background="rgb(234, 252, 246)">
          <a href="/">
            <div className="banner-left-item">
              <h3 className="item-title">코드 리뷰 별무리</h3>
              <h5 className="item-sub-title">
                코드 리뷰를 위한 장 별무리 입니다!!
                <br />
                지금 글을 남기고 코드 리뷰를 받아보세요!
              </h5>
            </div>
            <div className="banner-right-item">
              <Earth id="earth1" />
            </div>
          </a>
        </BannerItem>

        <BannerItem movePage={page} background="rgb(255, 241, 232)">
          <a href="/best">
            <div className="banner-left-item">
              <h3 className="item-title">코드 리뷰 인기글</h3>
              <h5 className="item-sub-title">
                수 많은 분들의 찬사를 받은 인기글입니다.
                <br />
                지금 한 눈에 모아보세요!!
              </h5>
            </div>
            <div className="banner-right-item">
              <Earth2 id="earth2" />
            </div>
          </a>
        </BannerItem>

        <BannerItem movePage={page} background="rgb(242, 236, 254)">
          <a href="/question">
            <div className="banner-left-item">
              <h3 className="item-title">코드 리뷰 Q&A</h3>
              <h5 className="item-sub-title">
                수 많은 분들이 답변을 기다리고 있어요!!
                <br />
                지금 처음으로 답변의 주인공이 !!
              </h5>
            </div>
            <div className="banner-right-item">
              <Earth3 id="earth3" />
            </div>
          </a>
        </BannerItem>
      </BannerList>

      <BannerRadios>
        <BannerRadio onClick={() => onClickRadio(0)} checked={page === 0} />

        <BannerRadio onClick={() => onClickRadio(1)} checked={page === 1} />

        <BannerRadio onClick={() => onClickRadio(2)} checked={page === 2} />
      </BannerRadios>
    </StForemBanner>
  );
};

const StForemBanner = styled.div`
  postion: relative;
  width: 100%;
  margin-bottom: 48px;
  overflow: hidden;
`;

const BannerList = styled.ul`
  width: 300%;
  height: 235px;
  display: flex;
  flex-direction: row;
`;

const BannerItem = styled.li`
  width: 100%;
  height: 100%;
  padding: 48px 64px;
  box-sizing: border-box;
  background: ${(props) => props.background};
  transform: translateX(-${(props) => props.movePage * 100}%);
  transition: transform 0.5s ease;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .banner-left-item {
      .item-title {
        margin-bottom: 14px;
        font-size: 2.4rem;
        font-weight: 400;
        color: #333;
      }

      .item-sub-title {
        font-size: 1rem;
        font-weight: 650;
        font-family: sans-serif;
        line-height: 2rem;
        color: #333;
      }
    }

    .banner-right-item {
      svg {
        width: 9.5rem;
        height: 9.5rem;
      }

      #earth1 {
        fill: #4b89dc;
      }

      #earth2 {
        fill: #964b00;
      }

      #earth3 {
        fill: #403a6b;
      }
    }
  }
`;

const BannerRadios = styled.div`
  width: 100%;
  margin-top: 14px;
  background: #fff;
  text-align: center;
`;

const BannerRadio = styled.button`
  width: 0.95rem;
  height: 1.15rem;
  box-sizing: border-box;
  background: #fff;
  border: 3px solid #bbb;
  border-radius: 50%;
  cursor: pointer;

  & + & {
    margin-left: 12px;
  }

  ${(props) =>
    props.checked &&
    css`
      background: rgb(64, 58, 107, 0.8);
    `}
`;

export default ForemBanner;
