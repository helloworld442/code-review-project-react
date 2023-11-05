import styled from "styled-components";

const WriteFormTimer = ({ label, minute, second, error, onChange }) => {
  const onCheckTimer = (e) => {
    let timer = e.target.value;

    if (timer >= 60) timer = 60;

    if (timer <= 0) timer = null;

    e.target.value = timer;
  };

  return (
    <WriteFormTimerBox>
      <WriteFormTimerLabel>{label}</WriteFormTimerLabel>

      <FormInputBox>
        <FormInput
          type="number"
          name="minute"
          value={minute}
          onChange={(e) => {
            onCheckTimer(e);
            onChange(e);
          }}
          placeholder="00"
        />
        <span>:</span>
        <FormInput
          type="number"
          name="second"
          value={second}
          onChange={(e) => {
            onCheckTimer(e);
            onChange(e);
          }}
          placeholder="00"
        />
      </FormInputBox>

      <FormError>{error}</FormError>
    </WriteFormTimerBox>
  );
};

const WriteFormTimerBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const WriteFormTimerLabel = styled.label`
  display: inline-block;
  width: auto;
  margin-bottom: 14px;
  font-size: 1.2rem;
  font-weight: 550;
  font-family: "Pretendard";
  color: #333;
`;

const FormInputBox = styled.div`
  display: inline-block;
  width: 150px;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid #e8e8e8;
  border-radius: 4px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

const FormInput = styled.input`
  width: 50px;
  box-sizing: border-box;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: Pretendard;
  text-align: center;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

const FormError = styled.span`
  display: inline-block;
  margin-top: 12px;
  font-size: 0.95rem;
  font-weight: 400;
  color: red;
`;

export default WriteFormTimer;
