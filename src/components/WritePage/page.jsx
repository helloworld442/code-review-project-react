import styled from "styled-components";
import { device } from "../../utils/_media";
import WriteForm from "./WriteForm";
import WriteIntro from "./WriteIntro";

const Write = () => {
  return (
    <WriteTemplate>
      <WriteCol>
        <WriteIntro />
        <WriteForm />
      </WriteCol>
    </WriteTemplate>
  );
};

const WriteTemplate = styled.main`
  width: 100%;
  height: auto;
  background: rgb(252, 252, 253);
  display: flex;
  justify-content: center;
`;

const WriteCol = styled.div`
  width: 1150px;
  height: auto;
  margin-top: 100px;
  box-sizing: border-box;
  display: flex;
  gap: 64px;

  @media ${device.tablet} {
    width: 100%;
    padding: 0 10vw;
    flex-direction: column;
  }
`;

export default Write;
