import styled from "styled-components";
import WriteFormTextArea from "./WriteFormTextArea";
import WriteFormInput from "./WriteFormInput";
import { useState } from "react";
import { Button } from "../ui/Button";
import WriteFormCode from "./WriteFormCode";
import useReviewStore from "../../hooks/useReviewStore";
import WriteFormTimer from "./WriteFormTimer";

const WriteForm = () => {
  const [form, setForm] = useState({
    title: "",
    preKnow: "",
    purpose: "",
    category: [],
    minute: "",
    second: "",
    code: "",
  });

  const [error, setError] = useState({
    title: "",
    preKnow: "",
    purpose: "",
    code: "",
    timer: "",
  });

  const [snapshot, reviewStore] = useReviewStore();

  const validateTitle = (title) => {
    if (title.trim() === "") return "제목을 입력해주세요";
    if (title.length < 5) return "제목의 길이를 (5~45)자로 맞춰주세요";
    if (title.length > 45) return "제목의 길이를 (5~45)자로 맞춰주세요";
    return "";
  };

  const validateCode = (code) => {
    if (code.trim() === "") return "코드를 입력해주세요";
    return "";
  };

  const validatePreKnow = (preKnow) => {
    if (preKnow.trim() === "") return "문제상황을 입력해주세요";
    return "";
  };

  const validatePurpose = (purpose) => {
    if (purpose.trim() === "") return "궁금한 점을 업력해주세요";
    return "";
  };

  const validateTimer = (timer) => {
    if (timer <= 0 || timer === null) return "시간을 입력해주세요";
    return;
  };

  const onChangeField = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const onSubmitField = (e) => {
    e.preventDefault();
    const timerError = validateTimer(form.second);
    const titleError = validateTitle(form.title);
    const codeError = validateCode(form.code);
    const preKnowError = validatePreKnow(form.preKnow);
    const purposeError = validatePurpose(form.purpose);

    if (titleError || codeError || preKnowError || purposeError || timerError) {
      setError({
        timer: timerError,
        title: titleError,
        preKnow: preKnowError,
        purpose: purposeError,
        code: codeError,
      });
      return;
    }

    reviewStore.postFetchData(form);
  };

  const onRefreshField = (e) => {
    e.preventDefault();

    window.location.reload();
  };

  console.log(error);

  return (
    <StWriteForm onSubmit={onSubmitField}>
      <WriteFormTimer
        minute={form.minute}
        second={form.second}
        error={error.timer}
        onChange={onChangeField}
        label="시간을 입력해주세요"
      />

      <WriteFormInput
        name="title"
        value={form.title}
        error={error.title}
        onChange={onChangeField}
        label="제목을 입력해주세요"
      />

      <WriteFormCode
        name="code"
        value={form.code}
        error={error.code}
        onChange={onChangeField}
        label="코드를 입력해주세요"
      />

      <WriteFormTextArea
        name="preKnow"
        value={form.preKnow}
        error={error.preKnow}
        onChange={onChangeField}
        label="사전지식을 입력해주세요"
      />

      <WriteFormTextArea
        name="purpose"
        value={form.purpose}
        error={error.purpose}
        onChange={onChangeField}
        label="목적을 입력해주세요"
      />

      <WriteFormButtons>
        <Button size="medium" onClick={onRefreshField}>
          취소
        </Button>
        <Button size="medium" primary="true" type="submit">
          등록
        </Button>
      </WriteFormButtons>
    </StWriteForm>
  );
};

const StWriteForm = styled.form`
  width: 750px;
  margin: 36px 0;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const WriteFormButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;

export default WriteForm;
