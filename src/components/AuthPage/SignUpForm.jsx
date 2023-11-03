import styled from "styled-components";
import { ReactComponent as Check } from "../../assets/check-solid.svg";
import { ReactComponent as User } from "../../assets/user-regular.svg";
import { device } from "../../utils/_media";
import ValidateForm from "./ValidateForm";
import { useState } from "react";
import InfoForm from "./InfoForm";
import { useRecoilValue } from "recoil";
import { emailCodeAtom } from "../../provider/recoil/atom";

const SignUpForm = () => {
  const [form, setForm] = useState({
    email: "",
    successKey: "",
    nickname: "",
    password: "",
    skill: [],
  });
  const [error, setError] = useState({ nickname: "", password: "", skill: "" });
  const emailCodeSuccess = useRecoilValue(emailCodeAtom);

  const onChangeField = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const onAddSelect = (value) => {
    setForm((prev) => ({ ...prev, skill: form.skill.concat(value) }));
    setError((prev) => ({ ...prev, skill: "" }));
  };

  const onRemoveSelect = (value) => {
    setForm((prev) => ({ ...prev, skill: form.skill.filter((s) => s !== value) }));
    setError((prev) => ({ ...prev, skill: "" }));
  };

  return (
    <SignUpFormBox>
      <SignUpFormTitle>회원가입</SignUpFormTitle>

      <SignUpFormProcess>
        <span id={"validate" + (emailCodeSuccess ? " disabled" : "")}>
          <Check />
          <h5>인증절차</h5>
        </span>

        <span id={"info" + (emailCodeSuccess ? " active" : "")}>
          <User />
          <h5>입력절차</h5>
        </span>
      </SignUpFormProcess>

      <SignUpFormContent>
        <ValidateForm form={form} onChangeField={onChangeField} />

        <InfoForm
          form={form}
          error={error}
          setError={setError}
          onChangeField={onChangeField}
          onAddSelect={onAddSelect}
          onRemoveSelect={onRemoveSelect}
        />
      </SignUpFormContent>
    </SignUpFormBox>
  );
};

const SignUpFormBox = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f0f0f5;
`;

const SignUpFormTitle = styled.h1`
  padding-top: 30px;
  padding-bottom: 18px;
  font-size: 2.2rem;
  text-align: center;
`;

const SignUpFormProcess = styled.div`
  padding-top: 30px;
  padding-bottom: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  #validate,
  #info {
    display: inline-block;
    width: 84px;
    height: 84px;
    border-radius: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 550;
    font-family: sans-serif;

    svg {
      width: 1.4rem;
      height: 1.4rem;
      fill: #888;
    }

    h5 {
      margin-top: 12px;
      font-size: 0.725rem;
      font-weight: 550;
      font-family: sans-serif;
      color: #888;
    }
  }

  #validate {
    background: rgb(64, 58, 107, 1);
    svg {
      fill: #fff;
    }

    h5 {
      color: #fff;
    }
  }

  #disabled {
    background: rgb(64, 58, 107, 0.8);
    fill: #eee;
  }

  #active {
    background: rgb(64, 58, 107, 1);
    fill: #fff;
  }
`;

const SignUpFormContent = styled.div`
  width: calc(100% - 24vw);
  padding: 6vw 12vw;
  box-sizing: border-box;
  margin-bottom: 72px;
  border-radius: 0.5rem;
  background: #fff;

  @media ${device.tablet} {
    width: calc(100% - 12vw);
    padding: 6vw;
  }
`;

export default SignUpForm;
