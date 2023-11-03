import styled from "styled-components";

const WriteFormInput = ({ label, error, ...rest }) => {
  return (
    <WriteFormInputBox>
      <WriteFormInputLabel>{label}</WriteFormInputLabel>
      <StWriteFormInput {...rest} />
      <WriteFormInputError>{error}</WriteFormInputError>
    </WriteFormInputBox>
  );
};

const WriteFormInputBox = styled.div`
  position: relative;
  width: 100%;
`;

const WriteFormInputLabel = styled.label`
  display: inline-block;
  width: auto;
  margin-bottom: 14px;
  font-size: 1.2rem;
  font-weight: 550;
  font-family: "Pretendard";
  color: #333;
`;

const StWriteFormInput = styled.input`
  width: 100%;
  padding: 14px 12px;
  box-sizing: border-box;
  border: 2px solid #e8e8e8;
  border-radius: 4px;
  outline: none;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: "Pretendard";
  letter-spacing: 1px;
  color: #333;
  background: #fff;

  &:placeholder {
    color: #888;
  }
`;

const WriteFormInputError = styled.span`
  display: inline-block;
  margin-top: 12px;
  font-size: 0.95rem;
  font-weight: 400;
  color: red;
`;

export default WriteFormInput;
