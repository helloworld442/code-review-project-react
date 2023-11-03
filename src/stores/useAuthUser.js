import { useState } from "react";
import { loginUser, registerUser } from "../api/auth";

const useLoginUser = () => {
  const [status, setStatus] = useState({
    isLoading: false,
    isError: false,
    data: null,
  });

  const callback = async (data) => {
    setStatus({ isLoading: true, isError: false, data: null });

    try {
      const response = await loginUser(data);
      setStatus({ isLoading: false, isError: false, data: response });
    } catch (err) {
      setStatus({ isLoading: false, isError: true, data: null });
    }
  };

  return [status, callback];
};

const useRegisterUser = () => {
  const [status, setStatus] = useState({
    isLoading: false,
    isError: false,
    data: null,
  });

  const callback = async (data) => {
    setStatus({ isLoading: true, isError: false, data: null });

    try {
      const response = await registerUser(data);
      setStatus({ isLoading: false, isError: false, data: response });
    } catch (err) {
      setStatus({ isLoading: false, isError: true, data: null });
    }
  };

  const refresh = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return [status, callback, refresh];
};

export { useLoginUser, useRegisterUser };
