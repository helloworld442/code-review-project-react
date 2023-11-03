import { styled } from "styled-components";
import { device } from "../../utils/_media";

const Header = () => {
  return (
    <StHeader>
      <StHeaderNav>
        <h2 className="header-nav-logo">
          <a href="/">별무리 스튜디오</a>
        </h2>
        <ul className="header-nav-menu">
          <li className="header-nav-item">
            <a href="/write">글쓰기</a>
          </li>
          <li className="header-nav-item">
            <a href="/login">로그인</a>
          </li>
        </ul>
      </StHeaderNav>
    </StHeader>
  );
};

const StHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background: #fff;
  display: flex;
  justify-content: center;
  z-index: 100;
`;

const StHeaderNav = styled.nav`
  width: 1150px;
  height: 80px;
  box-sizing: border-box;
  color: #333;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-nav-logo {
    font-size: 1.35rem;
    font-weight: 400;
    cursor: pointer;
  }

  .header-nav-item {
    display: inline-block;
    padding: 12px 24px;
    box-sizing: border-box;
    font-size: 1.2rem;
    font-weight: 300;
    color: #333;
    cursor: pointer;

    &:nth-child(2) {
      padding-right: 0;
    }
  }

  @media ${device.tablet} {
    width: 100%;
    padding: 0 10vw;
  }
`;

export { Header };
