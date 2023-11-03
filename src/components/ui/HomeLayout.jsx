import { Outlet } from "react-router-dom";
import { Category } from "./Category";

const HomeLayout = () => {
  return (
    <HomeTemplate>
      <HomeCol>
        <Category index={0} />

        <HomeBox>
          <Outlet />
        </HomeBox>
      </HomeCol>
    </HomeTemplate>
  );
};

const HomeTemplate = styled.main`
  width: 100%;
  height: auto;
  background: #fff;
  display: flex;
  justify-content: center;
`;

const HomeCol = styled.div`
  width: 1150px;
  height: auto;
  margin-top: 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  @media ${device.tablet} {
    width: 100%;
    padding: 0 10vw;
    flex-direction: column;
  }
`;

const HomeBox = styled.div`
  flex: 3;
  height: auto;
`;

export default HomeLayout;
