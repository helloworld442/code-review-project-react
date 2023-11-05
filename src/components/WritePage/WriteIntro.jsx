import styled from "styled-components";

const WriteIntro = () => {
  return (
    <StWriteIntro>
      <WriteIntroTitle>사용 방법</WriteIntroTitle>
      <WriteIntroDesc>
        1. 코드를 입력해서 자신의 코드를 통해 보다 정확한 정보를 제공해주세요
        <br />
        <br />
        2. 사전지식과 목적을 입력하는 칸에는 다음과 같은 목적과 기능이 있습니다.
        <br />
        <br />
        <span className="hightlight-desc">
          코드리뷰를 받는 이유는 자신의 코드 능력 향상 및 소프트웨어 품질 향상입니다.
          <br />
          자신의 능력 향상은 자신보다 높은 수준의 전문가에게 받을 때 일어납니다.
          <br />
          따라서 독자의 실력은 무시할 수 없는 조건 입니다.
          <br />
          또한 독자가 빠르게 파악할 수 있는 글은 "두괄식" 글입니다.
          <br />
          저희는 이 2가지 개념을 사전지식과 목적을 통해 나타냅니다.
          <br />
          <br />
          # , ## , ### 를 통해서 글자의 크기를 조정할 수 있습니다.
          <br />
          ** 문자열 ** 을 통해서 글자의 굻기를 조정할 수 있습니다.
          <br />
          ~~ 문자열 ~~ 을 통해서 글자의 취소선을 적용할 수 있습니다.
        </span>
        <br />
        <br />
        3. 타이머를 통해서 코드 리뷰의 시간을 정할 수 있습니다.
        <br />
        <br />
        <span className="hightlight-desc">
          코드리뷰에서 중요한 것은 빠르게 핵심을 얻어가는 것입니다.
        </span>
      </WriteIntroDesc>
    </StWriteIntro>
  );
};

const StWriteIntro = styled.div`
  width: 400px;
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

  .hightlight-desc {
    font-size: 0.825rem;
    color: #666;
    line-height: 1.8rem;
  }
`;

export default WriteIntro;
