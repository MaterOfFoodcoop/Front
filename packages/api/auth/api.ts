import { instance } from "../instance/instance";
import Cookies from "js-cookie";

interface LoginData {
  email: string;
  password: string;
}

export const login = async (loginData: LoginData): Promise<string> => {
  const { data } = await instance.post(`/login`, loginData);
  console.log(data);

  Cookies.set("token", data);

  return data;
};
