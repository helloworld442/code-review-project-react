import { useRecoilState } from "recoil";
import { emailCheck, emailSend } from "../api/auth";
import { eamilAtom, emailCodeAtom } from "../provider/recoil/atom";

const useValidateUser = () => {
  const [emailSuccess, setEmailSuccess] = useRecoilState(eamilAtom);
  const [emailCodeSuccess, setEmailCodeSuccess] = useRecoilState(emailCodeAtom);

  const onSendEmail = async (e, form) => {
    e.preventDefault();
    try {
      const emailCode = await emailSend({ email: form.email });
      setEmailSuccess(true);
    } catch (e) {
      setEmailSuccess(false);
    }
  };

  const onCheckEmail = async (e, form) => {
    e.preventDefault();
    try {
      const emailSuccess = await emailCheck({ email: form.email, successKey: form.successKey });
      setEmailCodeSuccess(true);
    } catch (e) {
      setEmailCodeSuccess(false);
    }
  };

  return { emailSuccess, emailCodeSuccess, onSendEmail, onCheckEmail };
};

export default useValidateUser;
