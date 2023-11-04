import styled from "styled-components";
import { device } from "../../utils/_media";
import { Button } from "../ui/Button";
import { useState } from "react";
import useAuthStore from "../../hooks/useAuthStore";

const SignInForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [snapshot, authStore] = useAuthStore();

  const onChangeField = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitField = (e) => {
    e.preventDefault();

    authStore.postFetchLogin(form);
  };

  return (
    <StSignIn onSubmit={onSubmitField}>
      <SignInContent>
        <SigInContentTitle>로그인</SigInContentTitle>
        {/* 인풋 영역 1 */}
        <SignInInputBox>
          <SigInInputLabel>이메일 입력</SigInInputLabel>
          <SignInInput
            type="text"
            name="email"
            onChange={onChangeField}
            placeholder="이메일을 입력하세요"
          />
        </SignInInputBox>

        {/* 인풋 영역2 */}
        <SignInInputBox>
          <SigInInputLabel>비밀번호 입력</SigInInputLabel>
          <SignInInput
            type="password"
            name="password"
            onChange={onChangeField}
            placeholder="비밀번호를 입력하세요"
          />
        </SignInInputBox>

        {/* 버튼 영역 */}
        <Button size="large" fullwidth>
          로그인
        </Button>

        <SignInLink>
          <a>비밀번호를 잊으셨나요?</a>
        </SignInLink>

        <SignInLink>
          별무리 회원이 아니신가요? <a href="/register">회원가입</a>
        </SignInLink>
      </SignInContent>
    </StSignIn>
  );
};

const StSignIn = styled.form`
  width: 100%;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f1f5;
`;

const SignInContent = styled.div`
  width: calc(100% - 64vw);
  padding: 6vw;
  margin-top: 80px;
  box-sizing: border-box;
  margin-bottom: 72px;
  border-radius: 0.5rem;
  background: #fff;

  @media ${device.tablet} {
    width: calc(100% - 48vw);
    padding: 6vw;
  }
`;

const SigInContentTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

const SignInInputBox = styled.div`
  position: relative;
  margin: 48px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SigInInputLabel = styled.label`
  display: inline-block;
  width: auto;
  margin-bottom: 8px;
  font-size: 1rem;
  font-weight: bold;

  span {
    color: red;
  }
`;

const SignInInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px;
  margin-top: 8px;
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

const SignInLink = styled.div`
  margin-top: 24px;
  text-align: center;
  font-size: 0.825rem;
  font-weight: 550;
  font-family: sans-serif;
  color: #888;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: underline;
    color: #333;
    cursor: pointer;
  }
`;

export { SignInForm };
