import type { loginFormModel } from "../../../constant/model/login";
import instance from "../init";

const AUTH_URL = import.meta.env.VITE_AUTH_URL;

const login = async (data: loginFormModel) => {
  const res = instance.post(`${AUTH_URL}/login`, data);

  return res;
};

export { login };
