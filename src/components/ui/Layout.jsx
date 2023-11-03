import { styled } from "styled-components";

const Layout = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};

const StLayout = styled.div`
  width: 100%;
  height: 100%;
`;

export { Layout };
