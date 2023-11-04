import styled from "styled-components";
import WriteFormTextArea from "./WriteFormTextArea";
import WriteFormInput from "./WriteFormInput";
import { useState } from "react";
import { Button } from "../ui/Button";
import WriteFormCode from "./WriteFormCode";
import useReviewStore from "../../hooks/useReviewStore";

const WriteForm = () => {
  const [form, setForm] = useState({
    title: "",
    problem: "",
    question: "",
    category: [],
    code: "",
  });

  const [error, setError] = useState({
    title: "",
    problem: "",
    question: "",
    code: "",
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

  const validateProblem = (problem) => {
    if (problem.trim() === "") return "문제상황을 입력해주세요";
    return "";
  };

  const validateQuestion = (question) => {
    if (question.trim() === "") return "궁금한 점을 업력해주세요";
    return "";
  };

  const onChangeField = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const onSubmitField = (e) => {
    e.preventDefault();
    const titleError = validateTitle(form.title);
    const codeError = validateCode(form.code);
    const problemError = validateProblem(form.problem);
    const questionError = validateQuestion(form.question);

    if (titleError || codeError || problemError || questionError) {
      setError({
        title: titleError,
        problem: problemError,
        question: questionError,
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

  return (
    <StWriteForm onSubmit={onSubmitField}>
      <WriteFormInput
        name="title"
        value={form.title}
        error={error.title}
        onChange={onChangeField}
        label="제목을 입력하세요"
      />

      <WriteFormCode
        name="code"
        value={form.code}
        error={error.code}
        onChange={onChangeField}
        label="코드를 입력하세요"
      />

      <WriteFormTextArea
        name="problem"
        value={form.problem}
        error={error.problem}
        onChange={onChangeField}
        label="문제상황을 입력해주세요"
      />

      <WriteFormTextArea
        name="question"
        value={form.question}
        error={error.question}
        onChange={onChangeField}
        label="궁금한점을 입력해주세요"
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
  flex: 3;
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
