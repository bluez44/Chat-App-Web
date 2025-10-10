import type {
  loginFormModel,
  registerFormModel,
} from "../../../constant/model/auth";
import instance from "../init";

const AUTH_URL = import.meta.env.VITE_AUTH_URL;

const loginApi = async (data: loginFormModel) => {
  const res = instance.post(`${AUTH_URL}/login`, data);

  return res;
};

const registerApi = async (data: registerFormModel) => {
  const res = instance.post(`${AUTH_URL}/register`, data);

  return res;
};

export { loginApi, registerApi };
