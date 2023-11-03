import styled, { css } from "styled-components";
import { device } from "../../utils/_media";
import useValidateUser from "../../stores/useValidateUser";
import { useEffect, useState } from "react";

const ValidateForm = ({ form, onChangeField }) => {
  const [seconds, setSeconds] = useState(300);
  const { emailSuccess, emailCodeSuccess, onSendEmail, onCheckEmail } = useValidateUser();

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0 && emailSuccess && !emailCodeSuccess) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, emailSuccess]);

  const minutes = Math.floor(seconds / 60).toString();
  const remainingSeconds = (seconds % 60).toString();

  return (
    <ValidateFormSection>
      <ValidateFormTitle>이메일 인증</ValidateFormTitle>

      <ValidateFormContent>
        <form onSubmit={(e) => onSendEmail(e, form)}>
          <FormInputBox>
            <FormInputLabel>
              이메일 <span>*</span>
            </FormInputLabel>

            <FormInput
              type="email"
              name="email"
              onChange={onChangeField}
              disabled={emailCodeSuccess}
              placeholder="이메일을 입력하세요"
            />

            <FormInputButton disabled={emailCodeSuccess}>인증받기</FormInputButton>
          </FormInputBox>
        </form>

        <form onSubmit={(e) => onCheckEmail(e, form)}>
          <FormInputBox>
            <FormInputLabel>
              이메일 인증 <span>*</span>
            </FormInputLabel>

            <FormInput
              type="text"
              name="successKey"
              onChange={onChangeField}
              disabled={emailCodeSuccess}
              placeholder="인증코드를 입력하세요"
            />

            <FormTimer active={emailSuccess && seconds > 0} disabled={emailCodeSuccess}>
              {minutes.padStart(2, "0")} : {remainingSeconds.padStart(2, "0")}
            </FormTimer>

            <FormInputButton disabled={!emailSuccess || emailCodeSuccess}>인증하기</FormInputButton>
          </FormInputBox>
        </form>
      </ValidateFormContent>
    </ValidateFormSection>
  );
};

const ValidateFormSection = styled.section`
  margin-bottom: 30px;
`;

const ValidateFormTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
`;

const ValidateFormContent = styled.div``;

const FormInputBox = styled.div`
  position: relative;
  margin: 48px 0;
  display: flex;
  align-items: center;
`;

const FormInputLabel = styled.label`
  display: inline-block;
  width: 20%;
  font-size: 1rem;
  font-weight: bold;

  span {
    color: red;
  }
`;

const FormInput = styled.input`
  width: 50%;
  height: 50px;
  padding: 12px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 0.825rem;
  font-weight: 400;
  color: #333;
  background: #f0f1f5;

  &:placeholder {
    color: #888;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const FormInputButton = styled.button`
  position: absolute;
  right: 0;
  height: 50px;
  padding: 8px 24px;
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 800;
  color: rgb(254, 254, 254);
  background: rgb(64, 58, 107, 0.8);
  cursor: pointer;

  &:disabled {
    background: rgb(194, 200, 214);
    cursor: not-allowed;
  }
`;

const FormTimer = styled.span`
  padding: 16px 12px;
  margin: 0 24px;
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 800;
  color: rgb(254, 254, 254);
  background: rgb(194, 200, 214);
  cursor: not-allowed;

  @media (${device.tablet}) {
    font-size: 0.825rem;
    margin: 0 6px;
  }

  ${(props) =>
    props.active &&
    css`
      background: rgb(64, 58, 107, 0.8);
    `}

  ${(props) =>
    props.disabled &&
    css`
      background: rgb(194, 200, 214);
    `}
`;

export default ValidateForm;
