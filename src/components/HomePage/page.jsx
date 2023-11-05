import styled from "styled-components";
import { device } from "../../utils/_media";
import { HomeDashBoard } from "./HomeDashBoard";
import { HomeUser } from "./HomeUser";
import { HomeComment } from "./HomeComment";

const Home = () => {
  return (
    <HomeLayout>
      <HomeCol>
        <HomeDashBoard />

        <HomeBox>
          <HomeUser />
          <HomeComment />
        </HomeBox>
      </HomeCol>
    </HomeLayout>
  );
};

const HomeLayout = styled.main`
  width: 100%;
  height: auto;
  background: rgb(252, 252, 253);
  display: flex;
  justify-content: center;
`;

const HomeCol = styled.div`
  width: 1150px;
  height: auto;
  margin-top: 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    width: 100%;
    padding: 0 10vw;
    flex-direction: column;
  }
`;

const HomeBox = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: row;
  gap: 36px;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export default Home;
