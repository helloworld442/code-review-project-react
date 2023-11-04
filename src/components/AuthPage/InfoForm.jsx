import styled from "styled-components";
import { Select } from "../ui/Select";
import { Button } from "../ui/Button";
import useAuthStore from "../../hooks/useAuthStore";

const InfoForm = ({ form, error, setError, onChangeField, onAddSelect, onRemoveSelect }) => {
  const skills = form.skill.join(", ");
  const selectMenu = ["Spring", "React", "Java", "JavaScript"];
  const [snapshot, authStore] = useAuthStore();

  const { emailCodeSuccess } = snapshot;

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password))
      return "(8자리 이상 , 대소문자 포함 , 특수문자 포함 , 숫자 포함)";
    return;
  };

  const validateCategory = (category) => {
    if (category.length === 0) return "카테고리를 입력해주세요";
    return;
  };

  const validateNickname = (nickname) => {
    if (nickname.trim() === "") return "닉네임을 입력해주세요";
    return "";
  };

  const onSubmitField = (e) => {
    e.preventDefault();

    const nicknameError = validateNickname(form.nickname);
    const passwordError = validatePassword(form.password);
    const categoryError = validateCategory(form.skill);

    if (passwordError || categoryError || nicknameError) {
      setError({
        nickname: nicknameError,
        password: passwordError,
        category: categoryError,
      });

      return;
    }

    authStore.postFetchRegister(form);
  };

  const onReloadField = (e) => {
    e.preventDefault();

    window.location.reload();
  };

  return (
    <InfoFormSection>
      <InfoFormTitle>개인정보 입력</InfoFormTitle>

      <InfoFormContent>
        <form onSubmit={onSubmitField}>
          <FormInputBox>
            <FormInputLabel>
              스킬 선택 <span>*</span>
            </FormInputLabel>

            <Select onAddSelect={onAddSelect} onRemoveSelect={onRemoveSelect}>
              <Select.Trigger trigger={skills || "스킬을 선택하세요 복수 선택 O"} />
              <Select.Menu items={selectMenu} />
            </Select>

            <FormInputError>{error.skill}</FormInputError>
          </FormInputBox>

          <FormInputBox>
            <FormInputLabel>
              닉네임 입력 <span>*</span>
            </FormInputLabel>

            <FormInput
              type="text"
              name="nickname"
              onChange={onChangeField}
              disabled={!emailCodeSuccess}
              placeholder="닉네임을 입력하세요"
            />

            <FormInputError>{error.nickname}</FormInputError>
          </FormInputBox>

          <FormInputBox>
            <FormInputLabel>
              비밀번호 입력 <span>*</span>
            </FormInputLabel>

            <FormInput
              type="password"
              name="password"
              onChange={onChangeField}
              disabled={!emailCodeSuccess}
              placeholder="비밀번호를 입력하세요"
            />

            <FormInputError>{error.password}</FormInputError>
          </FormInputBox>

          <InfoFormButtons>
            <Button size="medium" onClick={onReloadField}>
              취소
            </Button>
            <Button size="medium" primary="true" type="submit">
              등록
            </Button>
          </InfoFormButtons>
        </form>
      </InfoFormContent>
    </InfoFormSection>
  );
};

const InfoFormSection = styled.section`
  margin-bottom: 30px;
`;

const InfoFormTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
`;

const InfoFormContent = styled.div``;

const InfoFormButtons = styled.div`
  margin-top: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

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

const FormInputError = styled.span`
  position: absolute;
  bottom: -25px;
  left: 20%;
  display: inline-block;
  margin-top: 12px;
  font-size: 0.825rem;
  font-weight: 400;
  color: red;
`;

export default InfoForm;
