import styled from "styled-components";

const WriteIntro = () => {
  return (
    <StWriteIntro>
      <WriteIntroTitle>사용 방법</WriteIntroTitle>
      <WriteIntroDesc>
        1. 코드를 입력해서 자신의 코드를 통해 보다 정확한 정보를 제공해주세요
        <br />
        <br />
        2. 문제상황과 궁금한점을 입력하는 칸에는 다음과 같은 기능이 있습니다.
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; - # , ## , ### 를 통해서 글자의 크기를 조정할 수 있습니다.
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; - ** 문자열 ** 을 통해서 글자의 굻기를 조정할 수 있습니다.
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; - ~~ 문자열 ~~ 을 통해서 글자의 취소선을 적용할 수 있습니다.
      </WriteIntroDesc>
    </StWriteIntro>
  );
};

const StWriteIntro = styled.div`
  flex: 1;
  margin: 36px 0;
`;

const WriteIntroTitle = styled.h2`
  display: inline-block;
  width: auto;
  margin-bottom: 14px;
  font-size: 1.2rem;
  font-weight: 550;
  font-family: "Pretendard";
  color: #333;
`;

const WriteIntroDesc = styled.pre`
  font-size: 0.9rem;
  font-weight: 500;
  font-family: "Pretendard";
  color: #333;
  line-height: 1.2rem;
`;

export default WriteIntro;
