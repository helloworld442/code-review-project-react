import api from "./instance";

const emailSend = async (req) => {
  const response = await api.post("/api/register/emailSend", req);
  return response.data;
};

const emailCheck = async (req) => {
  const response = await api.post("/api/register/emailCheck", req);
  return response.data;
};

const loginUser = async (req) => {
  const response = await api.post("/api/login", req);
  return response.data;
};

const registerUser = async (req) => {
  const response = await api.post("/api/register", req);
  return response.data;
};

export { emailSend, emailCheck, loginUser, registerUser };
