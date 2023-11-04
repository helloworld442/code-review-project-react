import styled from "styled-components";
import { device } from "../../utils/_media";
import InfoForm from "./InfoForm";
import ValidateForm from "./ValidateForm";
import { useState } from "react";

const SignUpForm = () => {
  const [form, setForm] = useState({
    email: "",
    successKey: "",
    nickname: "",
    password: "",
    skill: [],
  });
  const [error, setError] = useState({ nickname: "", password: "", skill: "" });

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
