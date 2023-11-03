import styled from "styled-components";

const QuestionUser = () => {
  return (
    <QuestionUserSection>
      <QuestionUserTitle>유저 정보</QuestionUserTitle>
      <QuestionUserContent>
        <div className="user-basic-info">
          <span></span>
          <h4>김민승</h4>
        </div>
        <div className="user-skill-info">
          스킬 : <span>Javascript</span>
        </div>
      </QuestionUserContent>
    </QuestionUserSection>
  );
};

const QuestionUserSection = styled.section`
  display: flex;
  flex: 1.2;
  height: 200px;
  margin-bottom: 48px;
  flex-direction: column;
`;

const QuestionUserTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 1.4rem;
  font-weight: 400;
  color: #333;
`;

const QuestionUserContent = styled.div`
  padding: 24px;
  box-sizing: border-box;
  border: 1px solid #bbb;
  border-radius: 4px;

  .user-basic-info {
    display: flex;
    align-items: center;

    span {
      display: inline-block;
      width: 56px;
      height: 56px;
      margin-right: 12px;
      border: 2px solid #eee;
      border-radius: 100%;
      background: #403a6b;
    }

    h4 {
      font-size: 1.2rem;
      font-weight: 400;
      color: #333;
    }
  }

  .user-skill-info {
    margin-top: 24px;
    font-size: 0.95rem;
    font-weight: 550;

    span {
      color: rgb(64, 58, 107, 0.8);
    }
  }
`;

export default QuestionUser;
