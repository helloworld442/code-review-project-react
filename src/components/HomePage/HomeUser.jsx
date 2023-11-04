import styled from "styled-components";
import { device } from "../../utils/_media";
import { ReactComponent as Earth } from "../../assets/earth-asia-solid.svg";

export const HomeUser = () => {
  return (
    <HomeUserSection>
      <SectionTitle>User Profile</SectionTitle>

      <SectionContent>
        <div className="user-profile">
          <Earth className="thumnail" />

          <h5 className="rate">Cluster</h5>
        </div>
        <div className="user-info">
          <p>
            <span>이름</span>minmin
          </p>

          <p>
            <span>기술 스택</span> javascript
          </p>
        </div>
        <a className="user-link">마이페이지</a>
      </SectionContent>
    </HomeUserSection>
  );
};

const HomeUserSection = styled.section`
  width: 450px;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 750;
  font-family: Pretendard;
  color: rgb(64, 58, 107, 0.8);
`;

const SectionContent = styled.div`
  position: relative;
  padding: 36px;
  margin-top: 20px;
  box-sizing: border-box;
  border: 1px solid #e1e3e7;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  gap: 24px;

  .user-profile {
    .thumnail {
      width: 6.2rem;
      height: 6.2rem;
      padding: 4px;
      border-radius: 50%;
      fill: rgb(64, 58, 107, 0.8);
      background: #efefef;
    }

    .rate {
      margin-top: 24px;
      text-align: center;
      font-size: 1.15rem;
    }
  }

  .user-info {
    width: 300px;
    margin: 12px 0;
    font-size: 1rem;
    font-weight: 550;
    font-family: Pretendard;
    color: #555;

    p {
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
    }

    span {
      font-size: 1.2rem;
      font-weight: 200;
      font-family: Jua;
      color: #333;
    }
  }

  .user-link {
    position: absolute;
    bottom: 36px;
    right: 36px;
    width: 240px;
    padding: 12px 24px;
    box-sizing: border-box;
    border: 2px solid #e8e8e8;
    border-radius: 4px;
    font-weight: 200;
    color: #bbb;
    text-align: center;
    cursor: pointer;

    &:hover {
      border: 2px solid rgb(64, 58, 107, 0.8);
      color: rgb(64, 58, 107, 0.8);
    }
  }
`;
